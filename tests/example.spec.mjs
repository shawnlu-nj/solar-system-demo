import { test, expect } from 'playwright/test';

test('page loads and renders', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page.locator('canvas')).toBeAttached({ timeout: 10000 });

  const body = page.locator('body');
  await expect(body).not.toBeEmpty();
});
