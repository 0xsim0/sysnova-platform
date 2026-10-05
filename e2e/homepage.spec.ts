import { test, expect } from "@playwright/test";

test("Homepage lädt und zeigt Hauptüberschrift", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1").first()).toBeVisible();
});

test("Sprachumschalter wechselt zu Englisch", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  // Precondition: page must start in German; if EN is default this button won't exist
  await expect(page.getByRole("button", { name: "Zu Englisch wechseln" })).toBeVisible();
  await page.getByRole("button", { name: "Zu Englisch wechseln" }).click();
  await expect(page.locator("text=Services").first()).toBeVisible({ timeout: 5000 });
});

test("Blog-Link öffnet Blog-Seite", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("link", { name: /blog/i }).first().click();
  await expect(page).toHaveURL(/\/blog/);
  await expect(page.locator("h1").first()).toBeVisible();
});
