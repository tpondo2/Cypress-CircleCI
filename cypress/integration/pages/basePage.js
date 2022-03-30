/// <reference types="cypress" />
class BasePage {

    //HELPERS
    visitPage = (endpoint) => cy.visit(endpoint);


    // FINDING ELEMENTS
    findElementWithId = (id) => cy.get(`#${id}`);

}

export default BasePage;