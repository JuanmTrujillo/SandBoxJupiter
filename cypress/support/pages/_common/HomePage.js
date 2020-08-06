class HomePage{
    getUserName(){
        return cy.get('[name=username]');
    }
    getPassword(){
        return cy.get('[name=password]');
    }
    getLoginButton(){
        return cy.get('[type=submit]');
    }
    getKnowledgeBase(){
        return cy.get('.pull-left > h6 > .link');
    }
    getForgotPassword(){
        return cy.get('.pull-right > h6 > .link');
    }
    getAlert(){
        return cy.get('.alert.alert-danger');
    }
}
export default HomePage