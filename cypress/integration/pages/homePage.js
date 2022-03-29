import BasePage from "./basePage";

class HomePage extends BasePage {

    //ELEMENTS
    changeTextButton = () => cy.get('#text-change');

    // ACTIONS
    visitHomePage = () => cy.visit('/');

    clickChangeTextButton = () => this.changeTextButton().click();
}

export default HomePage;