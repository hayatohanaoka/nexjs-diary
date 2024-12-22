// 日記の新規作成を行う画面の表示

import { test, expect } from "@playwright/test";
import { assertHeader } from "../../../common/common";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる",async ({ page }) => {
  await assertHeader("/diary/create", "日記帳アプリ", page);
})

test("ユーザーは日記のタイトルを入力することができる", async ({ page }) => {
  await page.goto("/diary/create");

  const expectedTitleText = "タイトル";
  const expectedInputText = "テストタイトル";
  
  const targetTitle = await page.locator("form div[data-test-id='diary-title'] label");
  const targetInput = await page.locator("form div[data-test-id='diary-title'] input");
  await targetInput.fill(expectedInputText);
  
  await expect(targetTitle).toBeVisible();
  await expect(targetTitle).toHaveText(expectedTitleText);
  
  await expect(targetInput).toBeVisible();
  await expect(targetInput).toHaveValue(expectedInputText);
})

test("ユーザーは日記の本文を入力欄に入力することができる", async ({page}) => {
  await page.goto("/diary/create");
  
  const expectedTitleText = "本文";
  const expectedText = "テスト日記";
  
  const targetTitle = await page.locator("form div[data-test-id='diary-main'] label");
  const targetTextArea = await page.locator("form div[data-test-id='diary-main'] textarea");
  await targetTextArea.fill(expectedText);
  
  await expect(targetTitle).toBeVisible();
  await expect(targetTitle).toHaveText(expectedTitleText);

  await expect(targetTextArea).toBeVisible();
  await expect(targetTextArea).toHaveValue(expectedText);
})
