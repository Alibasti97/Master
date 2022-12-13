/// <reference types="Cypress" />

describe("Sign-In", function(){

  it("Open the Link", function(){
    cy.click("cy.get('.pull-right > li > a')").wait(2000)

  })

})