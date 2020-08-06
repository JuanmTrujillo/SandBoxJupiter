// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import HomePage from '../support/pages/_common/homepage'
import DashBoard from '../support/pages/merchant/dashboard'

Cypress.Commands.add('navigateToUrl',(baseUrl) => {
    cy.visit('/')
})

Cypress.Commands.add('loginWithUi',(username, password) => {
    const homePage = new HomePage();
    homePage.getUserName().type(username)
    homePage.getPassword().type(password)
    homePage.getLoginButton().click()
})
Cypress.Commands.add('verifyMenuElements',() => {
    const dashBoard = new DashBoard();
    dashBoard.getToggleMenubutton().click();
    dashBoard.getDashBoard().should('be.visible');
    dashBoard.getCustomers().should('be.visible');
    dashBoard.getVirtualTerminal().should('be.visible');
    dashBoard.getTransactions().should('be.visible');
    dashBoard.getReporting().should('be.visible');
})
Cypress.Commands.add('logOut',()=> {
    const dashBoard = new DashBoard();
    dashBoard.getLogoutButton().click();
})
Cypress.Commands.add('retrieveAlert',()=> {
    const homePage = new HomePage();
    homePage.getAlert().should('be.visible')
})
