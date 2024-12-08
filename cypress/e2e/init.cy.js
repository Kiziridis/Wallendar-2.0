// EVENT SCREEN
describe('Test Event Selection Screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/docs');
  });

  it('Expand and Collapse the Event Section', () => {
    // Target the "Event" section by its ID
    cy.get('h4#operations-tag-Event').as('eventSection');

    // Verify the section is initially expanded
    cy.get('@eventSection').should('have.attr', 'data-is-open', 'true');

    // Click to collapse the section
    cy.get('@eventSection').click();

    // Verify the section is collapsed
    cy.get('@eventSection').should('have.attr', 'data-is-open', 'false');

    // Click again to expand the section
    cy.get('@eventSection').click();

    // Verify the section is expanded
    cy.get('@eventSection').should('have.attr', 'data-is-open', 'true');
  });

  it('Create an Event', () => {
    // Ensure the section is expanded by clicking the button inside the specific h4 element
    cy.get('h4.opblock-tag[data-tag="Event"]').within(() => {
      // Ensure the section is expanded without clicking the button
      cy.get('button.expand-operation').should('exist');
    });
    // Click the first link inside the div with the class 'opblock-summary opblock-summary-post'
    cy.get('#operations-Event-createEvent').within(() => {
      cy.get('a.nostyle').click();
    });
    // Click the "Try it out" button using cy.contains()
    cy.contains('button', 'Try it out').click();

    // Change the existing text in the textarea
    cy.get('#operations-Event-createEvent > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div:nth-child(3) > div > textarea')
      .invoke('val')
      .then((val) => {
        const updatedVal = val
          .replace(/"eventId": \d+/, `"eventId": 33`)
          .replace(/"date": \d+/, '"date": 20231')
          .replace(/"time": \d+/, '"time": 10')
          .replace(/"place": ".*"/, '"place": "Conference Room A"')
          .replace(/"title": ".*"/, '"title": "Team Meeting"')
          .replace(/"day": ".*"/, '"day": "Monday"')
          .replace(/"duration": \d+/, '"duration": 2');
        cy.get('#operations-Event-createEvent > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div:nth-child(3) > div > textarea')
          .invoke('val', updatedVal)
          .trigger('input');
      });

    // Click the "Execute" button
    cy.get('button.btn.execute.opblock-control__btn').click();

    // Assert that the URL includes '/#/Event/createEvent'
    cy.url().should('include', '/#/Event/createEvent');

   // Access the "Server response" table by its class name
   cy.get('table.responses-table.live-responses-table')
   .should('exist') // Assert that the table exists
   .and('be.visible'); // Assert that the table is visibl
  });
});

// CARD SCREEN
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


// TEST CALENDAR SCREEN
describe('Test Calendar Selection Screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/docs')
  });

  it('Test that calendar exists', () => {
    // Ensure the section is expanded 
    cy.get('h4.opblock-tag[data-tag="Calendar"]').within(() => {
      cy.get('button.expand-operation').should('exist');
    });
  
    // Assert that the element exists
    cy.get('#operations-Calendar-addEvent').should('exist');
  
    // Click the expand button to collapse the section
    cy.get('h4.opblock-tag[data-tag="Calendar"]').within(() => {
      cy.get('button.expand-operation').click();
    });
  
    // Assert that the element does not exist after collapsing the section
    cy.get('#operations-Calendar-addEvent').should('not.exist');
  
    // Click the expand button to expand the section again
    cy.get('h4.opblock-tag[data-tag="Calendar"]').within(() => {
      cy.get('button.expand-operation').click();
    });
  
    // Assert that the element exists again after expanding the section
    cy.get('#operations-Calendar-addEvent').should('exist');
  });

  it('Test delete event', () => {
    // Ensure the section is expanded 
    cy.get('h4.opblock-tag[data-tag="Calendar"]').within(() => {
      cy.get('button.expand-operation').should('exist');
    });
  
    // Assert that the delete event element exists
    cy.get('#operations-Calendar-deleteEvent').should('exist');
  
    // Click the delete event element
    cy.get('#operations-Calendar-deleteEvent').click();
  
    // Click the "Try it out" button
    cy.contains('Try it out').click();
  
    // Type into the input field with the placeholder 'calendarId - Id of the user's calendar'
    cy.get('input[placeholder="calendarId - Id of the user\'s calendar"]').type('1');
  
    // Type into the input field with the placeholder 'eventId - Id of the event that needs to be deleted'
    cy.get('input[placeholder="eventId - Id of the event that needs to be deleted"]').type('1');
  
    // Click the "Execute" button
    cy.get('button.btn.execute.opblock-control__btn').click();
  
    // Assert that the responses table exists and is visible
    cy.get('table.responses-table.live-responses-table')
      .should('exist')
      .and('be.visible');
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