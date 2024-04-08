import {test, expect} from '@playwright/test';

test('check text on page', async ({page}) => {
  await page.goto('/');
  console.log('process,', process.env.PLAYWRIGHT_TEST_BASE_URL)
  await expect(page.getByText('Manage your pet daycarepets with ease')).toBeVisible()
})
