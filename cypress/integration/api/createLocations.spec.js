/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


describe('Include locations', () => {

    let token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb21tb2RpdHktYXBpLTZiNWRjOGI1ZDgtbG1qZzgiLCJpZF9lbnRpdHkiOiIzNjIiLCJzY29wZSI6IkVMRVZBVE9SX1dFQl9BUFAiLCJzY29wZV9lbnRpdHlfaWQiOiI3IiwiZ3JhbnQiOiJDTElFTlRfQ1JFREVOVElBTFMiLCJpYXQiOjE2NDE0NzUxNjEsImV4cCI6MTY0MTUxODM2MX0.gwOLmJEufy-4evAxOzS0QSkOvr_wk8wJIK9_neUaZWk'

    it('Sucesso', () => {

        cy.request({
            method: 'POST',
            url: 'https://apis-homologation.saas-solinftec.com/commodity-api/company_location',
            headers: {
                Authorization: token
            },
            body: {
                "id": null,
                "name": "Dieni",
                "notes": "",
                "address": "Purdue Technology Center, 3000 Kent Ave, West Lafayette, Indiana 47906, United States",
                "active": true,
                "location": {
                    "type": "Point",
                    "coordinates": [
                        -86.92968171565781,
                        40.4619856777791
                    ]
                },
                "worksOnMonday": false,
                "mondayStart": null,
                "mondayEnd": null,
                "worksOnTuesday": false,
                "tuesdayStart": null,
                "tuesdayEnd": null,
                "worksOnWednesday": false,
                "wednesdayStart": null,
                "wednesdayEnd": null,
                "worksOnThursday": false,
                "thursdayStart": null,
                "thursdayEnd": null,
                "worksOnFriday": false,
                "fridayStart": null,
                "fridayEnd": null,
                "worksOnSaturday": false,
                "saturdayStart": null,
                "saturdayEnd": null,
                "worksOnSunday": false,
                "sundayStart": null,
                "sundayEnd": null,
                "waitTime": null,
                "customer": {
                    "id": 170435,
                    "idCompany": null,
                    "defaultLocation": null,
                    "name": "Customer Alison ",
                    "markets": []
                },
                "elevatorCompany": {
                    "id": 160
                },
                "barchartLocation": null,
                "locationType": {
                    "id": 1,
                    "name": null
                },
                "elevatorSilos": [],
                "managers": []

                        }

        })

    })

})