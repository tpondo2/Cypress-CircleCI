/// <reference types="cypress" />
class BasePage {

    //HELPERS
    visitPage(endpoint) {
        cy.visit(endpoint);
    }
}

export default BasePage;