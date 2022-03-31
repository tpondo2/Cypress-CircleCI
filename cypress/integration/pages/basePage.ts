/// <reference types="cypress" />
class BasePage {

    //HELPERS
    visitPage = (endpoint: String) => cy.visit(`${endpoint}`);


    // FINDING ELEMENTS
    public findElementWithId = (id: String) => cy.get(`#${id}`);

}

export default BasePage;