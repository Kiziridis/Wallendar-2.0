

describe('Tests', () => {
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
 

