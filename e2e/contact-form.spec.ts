import { test, expect, type Page } from "@playwright/test";

const MOCK_TOKEN = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/contact/send-otp", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ token: MOCK_TOKEN }),
    });
  });
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });
});

async function fillAndSubmitForm(page: Page) {
  await page.goto("/#contact");
  await page.waitForLoadState("networkidle");
  await page.fill('[id="name"]', "Max Mustermann");
  await page.fill('[id="email"]', "max@example.com");
  await page.fill('[id="message"]', "Testnachricht");
  await page.getByRole("button", { name: /senden|send/i }).first().click();
}

test("zeigt Fehler bei leeren Pflichtfeldern", async ({ page }) => {
  await page.goto("/#contact");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: /senden|send/i }).first().click();
  await expect(page.locator("#name-error, #email-error, #message-error").first()).toBeVisible();
});

test("zeigt Fehler bei ungültiger E-Mail", async ({ page }) => {
  await page.goto("/#contact");
  await page.waitForLoadState("networkidle");
  await page.fill('[id="name"]', "Max Mustermann");
  await page.fill('[id="email"]', "keine-email");
  await page.fill('[id="message"]', "Testnachricht");
  await page.getByRole("button", { name: /senden|send/i }).first().click();
  await expect(page.locator("#email-error")).toBeVisible();
});

test("vollständiger OTP-Flow: Formular → OTP → Erfolg", async ({ page }) => {
  await fillAndSubmitForm(page);

  await expect(page.locator("#otp-code")).toBeVisible({ timeout: 5000 });
  await page.fill("#otp-code", "123456");
  await page.getByRole("button", { name: /verifizieren|verify/i }).click();

  await expect(page.getByRole("status")).toBeVisible({ timeout: 5000 });
});

test("send-otp rate-limit (429) → Fehler-Banner erscheint", async ({ page }) => {
  // Überschreibt den beforeEach-Mock: simuliert E-Mail-Cooldown oder IP-Limit.
  // Die Komponente liest den Body bei non-2xx nicht — sie fällt direkt in setStatus("error").
  await page.route("**/api/contact/send-otp", async (route) => {
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({ error: "Please wait 60 seconds before requesting a new code." }),
    });
  });

  await fillAndSubmitForm(page);

  await expect(page.locator("#otp-code")).not.toBeVisible();
  await expect(page.locator("#api-error")).toBeVisible({ timeout: 5000 });
});

test("zu viele OTP-Versuche (429) → Fehlermeldung im OTP-Feld", async ({ page }) => {
  // Überschreibt den beforeEach-Mock: simuliert erschöpfte Verify-Versuche (max 5).
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({ error: "Too many attempts. Please request a new code." }),
    });
  });

  await fillAndSubmitForm(page);

  await expect(page.locator("#otp-code")).toBeVisible({ timeout: 5000 });
  await page.fill("#otp-code", "000000");
  await page.getByRole("button", { name: /verifizieren|verify/i }).click();

  await expect(page.locator("#otp-error")).toBeVisible({ timeout: 5000 });
});

test("Code erneut senden während Cooldown → Fehlermeldung im OTP-Feld", async ({ page }) => {
  await fillAndSubmitForm(page);

  // OTP-Schritt erscheint (beforeEach-Mock: 200)
  await expect(page.locator("#otp-code")).toBeVisible({ timeout: 5000 });

  // Ab jetzt schlägt send-otp fehl (60s-Cooldown)
  await page.route("**/api/contact/send-otp", async (route) => {
    await route.fulfill({
      status: 429,
      contentType: "application/json",
      body: JSON.stringify({ error: "Please wait 60 seconds before requesting a new code." }),
    });
  });

  await page.getByRole("button", { name: /erneut|resend/i }).click();

  await expect(page.locator("#otp-error")).toBeVisible({ timeout: 5000 });
});
