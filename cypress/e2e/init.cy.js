describe('Test Card Selection Screen', () => {
	beforeEach(() => {
	  cy.visit('http://localhost:8080/docs');
	});
  
	it('Select a Card', () => {
	  // Ensure the section is expanded by clicking the button inside the specific h4 element
	  cy.get('h4.opblock-tag[data-tag="Card"]').within(() => {
		// Ensure the section is expanded without clicking the button
		cy.get('button.expand-operation').should('exist');
	  });
	  // Click the first link inside the div with the class 'opblock-summary opblock-summary-get'
	  cy.get('#operations-Card-selectCard').within(() => {
		cy.get('a.nostyle').click();
	  });
	  // Click the "Try it out" button using cy.contains()
	  cy.contains('button', 'Try it out').click();
   
	  // Type into the input field with the placeholder 'walletId - Id of the user's wallet'
	  cy.get('input[placeholder="walletId - Id of the user\'s wallet"]').type('1');
  
	  // Type into the input field with the ID 'cardNumber'
	  cy.get('input[placeholder="cardNumber - Number of a user\'s card"]').type('11111222233334444');
  
	  // Click the "Execute" button
	  cy.get('button.btn.execute.opblock-control__btn').click();
  
	  // Assert that the URL includes '/#/Card/selectCard'
	  cy.url().should('include', '/#/Card/selectCard');

    // Access the "Server response" table by its class name
    cy.get('table.responses-table.live-responses-table')
    .should('exist') // Assert that the table exists
    .and('be.visible'); // Assert that the table is visible
	});

  it('Collapse and Expand the Card Section', () => {
    // Target the "Card" section by its ID
    cy.get('h4#operations-tag-Card').as('cardSection');

    // Verify the section is initially expanded
    cy.get('@cardSection').should('have.attr', 'data-is-open', 'true');

    // Click to collapse the section
    cy.get('@cardSection').click();

    // Verify the section is collapsed
    cy.get('@cardSection').should('have.attr', 'data-is-open', 'false');

    // Click again to expand the section
    cy.get('@cardSection').click();

    // Verify the section is expanded
    cy.get('@cardSection').should('have.attr', 'data-is-open', 'true');
  });
});



// TEST WALLET SCREEN
describe('Test Wallet Removal Screen', () => {
	beforeEach(() => {
	  cy.visit('http://localhost:8080/docs');
	});

	it('Remove a Card from Wallet', () => {
	  // Ensure the section is expanded by clicking the button inside the specific h4 element
	  cy.get('h4.opblock-tag[data-tag="Wallet"]').within(() => {
		// Ensure the section is expanded without clicking the button
		cy.get('button.expand-operation').should('exist');
	  });
	  // Click the first link inside the div with the class 'opblock-summary opblock-summary-get'
	  cy.get('#operations-Wallet-removeCard').within(() => {
		cy.get('a.nostyle').click();
	  });
	  // Click the "Try it out" button using cy.contains()
	  cy.contains('button', 'Try it out').click();
   
	  // Type into the input field with the placeholder 'walletId - Id of the user's wallet'
	  cy.get('input[placeholder="walletId - Id of the user\'s wallet"]').type('1');
  
	  // Type into the input field with the ID 'cardNumber'
	  cy.get('input[placeholder="cardNumber - Number of a user\'s card"]').type('11111222233334444');
  
	  // Click the "Execute" button
	  cy.get('button.btn.execute.opblock-control__btn').click();
  
	  // Assert that the URL includes '/#/Card/selectCard'
	  cy.url().should('include', '/#/Wallet/removeCard');

    // Access the "Server response" table by its class name
    cy.get('table.responses-table.live-responses-table')
    .should('exist') // Assert that the table exists
    .and('be.visible'); // Assert that the table is visible
	});


  it('Collapse and Expand the Wallet Section', () => {
    // Target the "Card" section by its ID
    cy.get('h4#operations-tag-Wallet').as('walletSection');

    // Verify the section is initially expanded
    cy.get('@walletSection').should('have.attr', 'data-is-open', 'true');

    // Click to collapse the section
    cy.get('@walletSection').click();

    // Verify the section is collapsed
    cy.get('@walletSection').should('have.attr', 'data-is-open', 'false');

    // Click again to expand the section
    cy.get('@walletSection').click();

    // Verify the section is expanded
    cy.get('@walletSection').should('have.attr', 'data-is-open', 'true');
  });
});