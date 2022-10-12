Feature: Add/remove Elements

    Adding and deleting Elements

Background: Background name
    Scenario: Adding Element
        Given I visit to homepage
        When  verify homepage
        And click on add/remove elements
        Then it navigate to Add/RemoveElements and verify the page    
        And verify and click on addelement button

    Scenario: Delete Element
        Given I visit to homepage
        When  verify homepage
        And click on add/remove elements
        Then it navigate to Add/RemoveElements
        Then verify the Add/RemoveElements page
        And verify and click on addelement button
        Then verify and click on Delete button
