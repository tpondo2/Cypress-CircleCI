import HomePage from "../pages/homePage"

describe('Test behaviour of buttons', () => {

    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('Text of button should be changed', () => {
      
        homePage.clickChangeTextButton();
        homePage.ifTextHasBeenChangedProperly();
    })

    it('Visual regression of popup image', () => {

        homePage.clickPopupButton();
        homePage.doVisualRegressionOfPopupImage();

    })

    it('Visual regression of contact background image', () => {

        homePage.clickHeader()
        homePage.doVisualRegressionOfHeader()
    })
  })