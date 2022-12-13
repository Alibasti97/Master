/// <reference types="cypress" />

describe("CSS-Locators", () =>{

    it("URL-Visit", () =>{
        cy.visit("http://adactinhotelapp.com/SearchHotel.php")
        cy.wait(1000)
    })

    
   
       it("enter-username", ()=>{
           cy.xpath("//input[@id='username']").type("alibasti").wait(500)
          })

          it("enter_pass", () =>{
            cy.xpath("//input[@id='password']").type("Basti@000")
       
           })

           it("Login", () =>{
            cy.xpath("//input[@id='login']").click()

           })
           it("Selecting_Values", function(){
            cy.get("#location")
            .select("Sydney")
           .should("have.value", 'Sydney')

           cy.get("#hotels")
           .select("Hotel Creek")
           .should("have.value", 'Hotel Creek')

           cy.get("#room_type")
           .select("Standard")
           .should("have.value", 'Standard')

           cy.get("#room_nos")
           .select("2")
           .should("have.value", '2')

        cy.get('#datepick_in').clear().type("13/12/2022").wait(500)

        cy.get('#datepick_out').clear().type("16/12/2022").wait(500)

        cy.get("#adult_room")
        .select("2")
        .should('have.value', '2')

        cy.get("#child_room")
        .select("1")
        .should("have.value",'1')
            
           })
           
   
})