
context('Test Adonline', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/assertions')
    // cy.loginAdonline('Jude Dennis', 'dennis');
  })

  describe('Primer test adonlie complejo', () => {
    it ( 'test asert', () => {

      const date = new Date().getTime();
      cy.log(date);
      return;

      cy.log(Cypress.$('perico').length);
      cy.log(cy.$$('perico').length);
      
      cy.log(Cypress.$('h1').length);

      if ( Cypress.$('h1').length > 0 )
      {
        cy.log(">>>>>H1<<<<<<");
        cy.get('h1');
      }

      if ( Cypress.$('h2').length > 0 )
      {
        cy.log(">>>>>H2<<<<<<");
        cy.get('h2');
      }

      cy.log(Cypress.$("[role='dialog']").length);

      /* cy.get('h11').should('not.be.visible').then(condition => {
        if (condition) {
            cy.get("[data-qa='input-username']").type('abcd');
            cy.get("[data-qa='input-password']").type('abcd');
            cy.get('.button').click();
        }
      }); */

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if (!$body.find('a:contains("Login")').length)
        {

        }
        else{
          cy.get('a').contains('Login').click();
        }         
     });
      // cy.log(Cypress.$("//*html///body").length)

      cy.get("periquin").should("exist", 2, {message: 'la leche'} );
      // cy.wrap(1).should('eq', 2, { message: 'Incorrect: 1 !== 2'})
    });
  });
});