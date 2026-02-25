import { expect, test } from "@playwright/test";

test('Page at / has heading "Communities".', async ({ page }) => {
  await page.goto("/communities");
  await expect(page.getByText("Communities")).toBeVisible();
});
