import { test, expect } from "@playwright/test";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
  await page.goto("/diary/create");
  const expectedText = "日記帳アプリ";

  const target = await page.locator("div h1")
  await expect(target).toHaveText(expectedText);
})

test("ユーザーは日記を入力するテキストボックスが表示されているのを見ることができる", async ({ page }) => {
  await page.goto("/diary/create");
  
  const target = await page.locator("form textarea[data-test-id='diary-main']");
  
  await expect(target).toBeVisible();
});

test("ユーザーは日記を入力するテキストボックスにテキストを入力することができる", async ({page}) => {
  await page.goto("/diary/create");
  
  const expectedText = "Test diary";
  const target = await page.locator("form textarea[data-test-id='diary-main']");
  await target.fill(expectedText);

  await expect(target).toHaveValue(expectedText);
})
