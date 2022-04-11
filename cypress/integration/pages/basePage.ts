/// <reference types="cypress" />
class BasePage {

    //HELPERS
    visitPage = (endpoint: String) => cy.visit(`${endpoint}`);


    // FINDING ELEMENTS
    public findElementWithId = (id: String) => cy.get(`#${id}`);
    public findElementWithClass = (className: String) => cy.get(`.${className}`);

}

export default BasePage;