export const cartLocators = {
  cartTable: (page) => page.locator('#cart_info_table'),
  cartRows: (page) => page.locator('#cart_info_table tbody tr[id^="product-"]'),
  emptyCartText: (page) => page.getByText(/cart is empty/i),
  proceedToCheckout: (page) => page.getByText('Proceed To Checkout', { exact: true }),
  deleteButtons: (page) => page.locator('.cart_quantity_delete'),
};
