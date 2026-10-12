# Page Object Model

A page object groups methods and locators for a page or reusable component. For example, `ProductsPage.search('Blue Top')` describes an interaction without exposing selector details to the test. `BasePage` holds only shared navigation. Tests own expected-outcome assertions, flows coordinate multiple page objects, and locator modules separate selectors from behavior.
