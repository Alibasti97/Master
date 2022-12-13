/// <reference types="Cypress" />

describe("Sign-In", function(){

    it("Open the Link", function(){
      cy.visit('http://react-redux.realworld.io/#/login?_k=brva4i')
      .wait(2000)
    })
  
    it("Enter Email", function(){
        cy.get(':nth-child(1) > .form-control').type("ali@hotmail.com")
        .wait(2000)
    })

    it("Enter Password", function(){
        cy.get(':nth-child(2) > .form-control').type("ali@123")
        .wait(2000)
    })

    it("Click SignIn", function(){
        cy.get('.btn').click()
        .wait(2000)
    })

    it("Need an account", function(){
        cy.get('p.text-xs-center > a').click()
        .wait(2000)
    })

  })