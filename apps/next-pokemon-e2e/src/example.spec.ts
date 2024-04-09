import { test, expect } from '@playwright/test';

test('search for bulb results in one li with text Bulbasaur', async ({
  page,
}) => {
  await page.goto('/');

  // Set the search input to "bulb"
  await page.fill('input[type="text"]', 'bulb');

  // Submit the form
  await page.press('input[type="text"]', 'Enter');

  // Wait for the results to load
  await page.waitForSelector('li', { timeout: 60000 });

  // Check that there is only one li
  const liCount = await page.$$eval('li', (lis) => lis.length);
  expect(liCount).toBe(1);

  // Check that the li contains the text "Bulbasaur"
  const liText = await page.locator('li').innerText();
  expect(liText).toContain('Bulbasaur');
});
