@regression @products
Feature: Product search
  As a shopper I want to find an item in the catalogue

  Scenario: Search for a product
    Given the shopper opens the Automation Exercise home page
    When the shopper navigates to the products page
    And the shopper searches for "Blue Top"
    Then matching products should be displayed
