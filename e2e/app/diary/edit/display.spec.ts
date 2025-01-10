import { test, expect } from "@playwright/test";
import { assertHeader } from "../../../common/common";

test.describe("日記の編集画面の表示テスト", () => {
  test.describe("正常系" , () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/diary/edit/1");
    })

    test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる",async ({ page }) => {
      await assertHeader("/diary/edit/1", "日記帳アプリ", page);
    })

    test("ユーザーは編集前の日記の内容がデフォルトで入力されているのを見ることができる", async ({ page }) => {
      const expectedTitleText = "固定タイトル";
      const expectedBody = "固定本文";
      const expectedYear = "2020"
      const expectedMonth = "1"
      const expectedDay = "1";

      const targetTitle = await page.locator("form div[data-test-id='diary-title'] input");
      const targetBody = await page.locator("form div[data-test-id='diary-main'] textarea");
      const targetYearPulldown = await page.locator("form select[data-test-id='diary-year']");
      const targetMonthPulldown = await page.locator("form select[data-test-id='diary-month']");
      const targetDayPulldown = await page.locator("form select[data-test-id='diary-day']");

      await expect(targetTitle).toHaveValue(expectedTitleText);
      await expect(targetBody).toHaveValue(expectedBody);
      await expect(targetYearPulldown).toHaveValue(expectedYear);
      await expect(targetMonthPulldown).toHaveValue(expectedMonth);
      await expect(targetDayPulldown).toHaveValue(expectedDay);
    })
  })
})

