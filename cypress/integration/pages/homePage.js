import BasePage from "./basePage";

class HomePage extends BasePage {

    // ELEMENTS
    changeTextButton = () => this.findElementWithId('text-change')

    // ACTIONS
    visitHomePage = () => cy.visit('/');
    clickChangeTextButton = () => this.changeTextButton().click();

    // HELPERS
    ifTextHasBeenChangedProperly = () => this.changeTextButton().should('have.value', 'BUTTON CLICKED')
    
}

export default HomePage;