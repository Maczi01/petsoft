import {test, expect} from '@playwright/test';

test('check text on page', async ({page}) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByText('Manage your pet daycarepets 1 with ease')).toBeVisible()
})
