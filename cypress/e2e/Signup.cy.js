/// <reference types="Cypress" />

describe("SignUp_Test_Suite", function(){

it("Load-URL", function(){
cy.visit("https://react-redux.realworld.io/#/register?_k=ch5bjz")
.wait(2000)
})

it("open-an-account", function(){
    cy.get('p.text-xs-center > a').click()
    .wait(2000)
})

it("need-an-account", function(){
    cy.get('p.text-xs-center > a').click()
    .wait(2000)
})

it("Enter-Username", function(){
    cy.get(':nth-child(1) > .form-control').type("alibasti2022")
    .wait(2000)
})

it("Enter-Email", function(){
    cy.get(':nth-child(2) > .form-control').type("alibasti@gmail.com")
    .wait(2000)
})

it("Click-Signup", function(){
    cy.get('.btn').click()
    .wait(2000)
})

it("Enter-Password", function(){
    cy.get(':nth-child(3) > .form-control').type("alibasti2012")
    .wait(1000)
})

it("Click-Signup", function(){
    cy.get('.btn').click()
    .wait(2000)
})

})

describe("Sign_In_Test_Suite", function(){

it("Load_URL", function(){
    cy.visit("https://react-redux.realworld.io/#/login?_k=4xnlfd")
    .wait(1000)
})
it("Enter_Email", function(){
    cy.get(':nth-child(1) > .form-control').type("alibasti@gmail.com")
    .wait(500)
})

it("Enter_Password", function(){
    cy.get(':nth-child(2) > .form-control').type("alibasto2012").wait(500)
})

it("Click_Sign_In_btn", function(){
    cy.get('.btn').click()
    .wait(500)
})

it("Clear_func", function(){
    cy.get(':nth-child(2) > .form-control').clear()
})

})