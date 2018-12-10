describe('Create new travel Test', () => {
  beforeEach(function() {
    cy.initHomePage();
  });

  it('should create a new travel', () => {
    cy.get('@HomeNewListButton').click();
    cy.url().should('include', '/new');
    cy.get('.title')
      .children()
      .shadowRoot.get('input')
      .type('Viaje fake');
    cy.get('.button-wrapper')
      .first()
      .children()
      .get('ion-button')
      .click()
      .then(() => {
        cy.get('.element .native-input')
          .type('Actividad fake')
          .blur();
      });
  });
});
