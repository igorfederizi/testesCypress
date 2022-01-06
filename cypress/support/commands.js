/// <reference types="Cypress" />


Cypress.Commands.add('Login', () => {
    cy.visit('https://commodity-homologation.saas-solinftec.com/login');
    cy.get('#input-login-username').type('user.teste');
    cy.get('#input-login-password').type('user.teste4mbtlo7F3S');
    cy.get('#btn-login-login').click();
    
      cy.intercept('GET', 'https://apis-homologation.saas-solinftec.com/commodity-api/v2/token')
      .as('getToken');

    cy.wait('@getToken');

})

Cypress.Commands.add('gui_CreateCustomer', () => {
      cy.visit('customers');
      cy.get('#btn-customer-new').click();
      cy.get('#customer-text-name').type('Teste Treeine');
      cy.contains('Save').should('be.visible').click();

})

Cypress.Commands.add('gui_createLocations', () => {
      cy.visit('location');
      cy.get('#btn-location-new').click();
      cy.get('#name').type('Teste Treeine');
      cy.contains("Save").scrollIntoView().should('be.visible').click();


})

Cypress.Commands.add('gui_createContract', () => {
      cy.visit('contracts');
        cy.contains('New Contract').click();
        cy.get('#input-302').type('Contrato teste');
        cy.get('#input-306').click();
        cy.get(':nth-child(3) > :nth-child(5) > .v-btn').click();
        cy.get('#input-311').click();
        cy.get('.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(4) > :nth-child(6) > .v-btn').click();
        //cy.get('.col-4 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #customer-').type('Igor{downarrow}{enter}', {delay: 1000})
        //.wait(1200);

        cy.get('.col-4 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #customer-').click()
        cy.get('.col-4 > .v-input > .v-menu__content').contains('Igor').click();
        cy.get('#input-339').type('50');
        cy.get('#price').type('25');
        cy.get('.v-dialog').scrollTo('top');
        cy.contains('Save').should('be.visible').click();
    


})