/// <reference types="cypress" />

describe("Luma_Ecomm_Website", function(){

it("open_URL", function(){
    cy.visit("https://magento.softwaretestingboard.com/").wait(500)
})


// it("sign-up",function(){
//     cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
//     cy.xpath("//input[@id='firstname']").type("Ali")
//     cy.xpath("//input[@id='lastname']").type("Hassan")
//     cy.xpath("//input[@id='email_address']").type("alibasti2021@gmail.com")
//     cy.xpath("//input[@id='password']").type("Basti@000")
//     cy.xpath("//input[@id='password-confirmation']").type("Basti@000")
//     cy.xpath("//button[@title='Create an Account']//span[contains(text(),'Create an Account')]").click()
// })

// it("Sign-In", function(){
//     cy.xpath("//div[@class='panel header']//a[contains(text(),'Sign In')]").click()
//     cy.xpath("//input[@id='email']").type("alibasti2021@gmail.com")
//     cy.xpath("//fieldset[@class='fieldset login']//input[@id='pass']").type("Basti@000")
//     cy.xpath("//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]").click()
// }) 

it("Hover_Women", function(){
    cy.xpath("//a[@id='ui-id-4']//span[@class='ui-menu-icon ui-icon ui-icon-carat-1-e']").click()
})

it("Hover_Women", function(){
    cy.xpath("//a[@id='ui-id-9']//span[contains(text(),'Tops')]").click()
})



})