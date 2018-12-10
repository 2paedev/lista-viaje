describe('Home Initial Empty State Test', () => {
  beforeEach(function() {
    cy.initHomePage();
  });

  it('should init correct default elements when empty list', () => {
    cy.get('.info-message p').should('have.length', 3);
    cy.get('app-card', { timeout: 5000 })
      .first()
      .should('have.length', 1);
    cy.get('app-card', { timeout: 5000 })
      .first()
      .parent()
      .should('have.class', 'card-wrapper intermitente-anim');
    cy.get('.card').should('not.exist');
  });

  it('should go to NewPage when click to first button', () => {
    cy.get('@HomeNewListButton').click();
    cy.url().should('include', '/new');
  });
});
