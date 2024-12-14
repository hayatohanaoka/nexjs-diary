import { test, expect } from "@playwright/test";
import { goToTopPage } from "./display.cpt";

test("ユーザーはアプリケーションのタイトルとして「sample dairy」と表示されているのを見ることができる", async ({ page }) => {
  await test.step("got to top", async () => await goToTopPage(page));
  const expectedText = "sample diary";

  const target = await page.locator("div h1")
  await expect(target).toHaveText(expectedText);
})

test("日記を入力するテキストボックスが表示されている", async ({ page }) => {
  await test.step("got to top", async () => await goToTopPage(page));
  
  const target = await page.locator("form textarea[data-test-id='diary-main']");
  
  await expect(target).toBeVisible();
});

test("日記を入力するテキストボックスにテキストが入力できる", async ({page}) => {
  await test.step("got to top", async () => await goToTopPage(page));
  
  const expectedText = "Test diary";
  const target = await page.locator("form textarea[data-test-id='diary-main']");
  await target.fill(expectedText);

  await expect(target).toHaveValue(expectedText);
})
