
//import sandbox from '../../../cypress.sandbox.json'

describe('cypress login test with page objects and custom commands', function(){
    it('valid login test', function(){
        cy.navigateToUrl()
        cy.loginWithUi(Cypress.env('merchant.valid.user'), Cypress.env('merchant.valid.pass'))
        cy.location('pathname').should('eq','/dashboard')
        cy.verifyMenuElements()
        cy.logOut()
    })

    it('invalid login test', function(){
        cy.navigateToUrl()
        cy.loginWithUi(Cypress.env('merchant.invalid.user'), Cypress.env('merchant.invalid.pass'))
        cy.retrieveAlert()
    })
})