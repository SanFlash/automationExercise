# API testing

Checks use Playwright's request fixture and the [published Automation Exercise API list](https://www.automationexercise.com/api_list). The initial scenarios cover GET `/productsList`, GET `/brandsList`, POST `/searchProduct` using its documented `search_product` form field, and missing-parameter validation. Tests verify status and structure without guessing undocumented contracts. Network and public-site changes can still cause failures.
