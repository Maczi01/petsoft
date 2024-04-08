import {test, expect} from '@playwright/test';

test('check text on page', async ({page}) => {
  await page.goto('/');

  await expect(page.getByText('Manage your pet daycarepets with ease')).toBeVisible()
})
