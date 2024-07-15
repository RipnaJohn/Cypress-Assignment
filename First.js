//This is coming from mocha framework
//describe is Test suite - collection of test cases

//It is single test case

describe('Heroku Test Suite',() =>{// describe block

    it('Heroku Login Test', () => { // it block 
        
        cy.visit("https://the-internet.herokuapp.com/login")

        cy.get('#username').type("tomsmith"); // get is used to enter locators

        cy.get('#password').type("SuperSecretPassword!");

        cy.get('.radius').click();
    });
})