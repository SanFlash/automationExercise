# Page objects

Page objects wrap one page or reusable component and expose user-centered actions. They consume locator factories from `locators/`; expected business outcomes remain in tests. `BasePage` intentionally contains only common navigation behavior.

For example, `ProductsPage.search(term)` performs the search action while a test asserts the results. Update the relevant central locator module when markup changes, then rerun the focused suite.
