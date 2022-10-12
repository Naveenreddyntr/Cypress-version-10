import HomePage from '../../support/pageObjects/HomePage.po'
import AddorRemove from '../../support/pageObjects/AddorRemove.po'
const homepageobject=new HomePage()
const AddorRemoveElementsObject =new AddorRemove() 


Given('I visit to homepage', () => {
//cy.visit('http://the-internet.herokuapp.com/')
    cy.visit(Cypress.env('homepage'))
})
When('verify homepage', () => {
    homepageobject.homePageVerification()

})
And('click on add/remove elements', () => {
    homepageobject.clickingAddorRemoveElements()

})
Then('it navigate to Add/RemoveElements and verify the page', () => {
AddorRemoveElementsObject.addorRemoveElementsPageVerify()
})

And('verify and click on add element button', () => {
   AddorRemoveElementsObject.addElementButtonVerification()
AddorRemoveElementsObject.cilckingAddElement()
})

Scenario: DeleteElement
        Given('I visit to homepage',()=>{

        }) 
        When('verify homepage',()=>{

        }) 
        And  ('click on add/remove elements',()=>{

        })
        Then ('it navigate to Add/RemoveElements',()=>{

        })
        Then ('verify the Add/RemoveElements page',()=>{

        })
        And ('verify and click on addelement button',()=>{

        }) 
        Then ('verify and click on Delete button',()=>{

        })