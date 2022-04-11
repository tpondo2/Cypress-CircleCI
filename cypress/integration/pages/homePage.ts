import BasePage from "./basePage";

class HomePage extends BasePage {

    // ELEMENTS
    changeTextButton = ()  => this.findElementWithId('text-change');
    popupButton = ()  => this.findElementWithId('pop-up-btn');
    popupImage = () => this.findElementWithClass('lightbox-basic');

    // ACTIONS
    visitHomePage = () => cy.visit('/').url().should('contain' , "https://aquabottesting.com/");
    clickChangeTextButton = () => this.changeTextButton().click();
    clickPopupButton = () => this.popupButton().click()


    // HELPERS
    ifTextHasBeenChangedProperly = () => this.changeTextButton().should('have.value', 'BUTTON CLICKED');
    doVisualRegressionForPopupImage = () => this.popupImage().toMatchImageSnapshot();
   
    
}

export default HomePage;