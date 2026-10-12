export const productDetailsLocators = {
  information: (page) => page.locator('.product-information'),
  name: (page) => page.locator('.product-information h2'),
  reviewName: (page) => page.locator('#name'),
  reviewEmail: (page) => page.locator('#email'),
  reviewText: (page) => page.locator('#review'),
  reviewSubmit: (page) => page.locator('#button-review'),
  reviewSuccess: (page) => page.getByText('Thank you for your review.', { exact: true }),
};
