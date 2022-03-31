import HomePage from "../pages/homePage"

describe('Test behaviour of buttons', () => {

    const homePage = new HomePage();

    it('Text of button should be changed', () => {
      
        homePage.visitHomePage();
        homePage.clickChangeTextButton();
        homePage.ifTextHasBeenChangedProperly();
    })
  })