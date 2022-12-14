/// <reference types="Cypress" />

describe("Swaglabs", function(){

it("Login_Page", () =>{
cy.visit("https://computer-database.gatling.io/computers")
})

it("filter-by-name", ()=>{
cy.xpath("//input[@id='searchbox']").type("ACE")
cy.get("#searchsubmit").click()
})

it("Add_a_new_computer", () => {

    cy.xpath("//a[@id='add']").click()
    cy.get("#name").type("DELL")
    cy.get("#introduced").type("1997-11-25")
    cy.get("#discontinued").type("2000-03-20")

    cy.get("#company").select("27").should("have.value", '27')

    cy.get("input[value='Create this computer']").click()
})

it("Deleting_a_computer", () =>{
    cy.get("[href='/computers/501']").click()
    cy.get('.topRight > .btn').click({ force: true })
    
})




    


})