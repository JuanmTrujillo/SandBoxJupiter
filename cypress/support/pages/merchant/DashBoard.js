class DashBoard {
    getDashBoard(){
        return cy.get('[href="/dashboard"]');
    }
    getCustomers(){
        return cy.get('[href="/customers"]');
    }
    getVirtualTerminal(){
        return cy.get('[href="/virtual-terminal"]');
    }
    getTransactions(){
        return cy.get('[href="/reporting/transactions"]');
    }
    getReporting(){
        return cy.get(':nth-child(5) > .sidebar-menu-item > p');
    }
    getToggleMenubutton(){
        return cy.get('.navbar-toggler.px-0');
    }
    getLogoutButton(){
        return cy.get('#logout-div > li > .sidebar-menu-item > p');
    }
}
export default DashBoard