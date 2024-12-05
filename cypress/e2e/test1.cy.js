/// <reference types ="cypress"/>

it ('Google Search ', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Automation Step by step{Enter}')

    //cy.contains('Google search').click()


    cy.contains('Video').click()



})