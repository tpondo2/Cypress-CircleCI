import BasePage from "./basePage";

class HomePage extends BasePage {

    // ELEMENTS
    changeTextButton = ()  => this.findElementWithId('text-change');

    // ACTIONS
    visitHomePage = () => cy.visit('/').url().should('contain' , "https://aquabottesting.com/");
    clickChangeTextButton = () => this.changeTextButton().click();

    // HELPERS
    ifTextHasBeenChangedProperly = () => this.changeTextButton().should('have.value', 'BUTTON CLICKED');
    
}

export default HomePage;