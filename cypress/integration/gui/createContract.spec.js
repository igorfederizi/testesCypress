/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


  describe('Create Contract' , () => {
    before(() => cy.Login())

    it('Sucesso', () => {


        cy.gui_createContract();


        

    })

  })