/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


describe('Criar customer', () => {
    before(() => cy.Login())

    it('Sucesso', () => {

      //PEGANDO O VALOR DO TOKEN
      cy.intercept('GET', 'https://apis-homologation.saas-solinftec.com/commodity-api/v2/token')
      .as('getToken');

      //REPASSANDO PARA O SISTEMA
      cy.wait('@getToken');

      cy.gui_CreateCustomer();

    })
})