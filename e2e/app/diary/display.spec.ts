import { test, expect } from "@playwright/test";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
  await page.goto("/diary");
  const expectedText = "日記帳アプリ";

  const target = await page.locator("div h1")
  await expect(target).toHaveText(expectedText);
})
