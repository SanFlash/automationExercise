# Contact form tests

The basic check verifies critical contact form fields. A submission scenario should use generated data and a small test asset, accept the browser confirmation dialog, and assert the success status. Keep submission volume low because the site is shared public practice infrastructure. Run `npx playwright test tests/contact`.
