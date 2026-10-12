export const contactUsLocators = {
  heading: (page) => page.getByRole('heading', { name: 'Get In Touch', exact: true }),
  name: (page) => page.locator('input[data-qa="name"]'),
  email: (page) => page.locator('input[data-qa="email"]'),
  subject: (page) => page.locator('input[data-qa="subject"]'),
  message: (page) => page.locator('textarea[data-qa="message"]'),
  upload: (page) => page.locator('input[name="upload_file"]'),
  submit: (page) => page.locator('input[data-qa="submit-button"]'),
  success: (page) => page.locator('.status.alert-success'),
};
