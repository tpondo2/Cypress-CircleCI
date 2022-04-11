// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://docs.cypress.io/guides/tooling/typescript-support
// ***********************************************
//
// Declare specific type function
declare namespace Cypress {
	interface Chainable {
		
		toMatchSnapshot(): any;
		toMatchImageSnapshot(): any;
	}
}