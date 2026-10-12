export const productsLocators = {
  allProductsHeading: (page) => page.getByRole('heading', { name: 'All Products', exact: true }),
  searchInput: (page) => page.locator('#search_product'),
  searchButton: (page) => page.locator('#submit_search'),
  searchedProductsHeading: (page) => page.getByRole('heading', { name: 'Searched Products', exact: true }),
  productCards: (page) => page.locator('.features_items .product-image-wrapper'),
  viewProduct: (_page, card) => card.getByRole('link', { name: /view product/i }),
  productName: (page) => page.locator('.product-information h2'),
  productInformation: (page) => page.locator('.product-information'),
  categorySidebar: (page) => page.locator('.left-sidebar .category-products'),
  brandsSidebar: (page) => page.locator('.left-sidebar .brands_products'),
};
