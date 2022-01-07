/// <reference types="Cypress" />

Cypress.Commands.add('api_createCustomer', (accesstoken) => {
      cy.request({
            method: 'POST',
            url: 'https://apis-homologation.saas-solinftec.com/commodity-api/customers/save',
            headers: {
                Authorization: accesstoken,
            },
            body: {
                "id": null,
                "idCompany": {
                "id": "160"
                },
                "name": "Guilherme",
                "defaultLocation": {
                "id": null
                },
            },

        }).then((res) => {
            cy.log(JSON.stringify(res))
        });

})