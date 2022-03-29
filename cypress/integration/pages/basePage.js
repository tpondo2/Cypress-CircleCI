/// <reference types="cypress" />
class BasePage {

    visitPage(endpoint) {
        cy.visit(endpoint);
    }
}

export default BasePage;