import { test, expect, Page } from "@playwright/test";
import { assertHeader } from "../../../../common/common";

test.describe("日記の閲覧画面の表示テスト", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/diary/show");
	})
  
	test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
		await assertHeader("/diary/create", "日記帳アプリ", page);
	})

	test("ユーザーは「id=1」の日記の内容を閲覧することができる", async ({ page }) => {
		const expectedTitle = "固定タイトル";
		const expectedBody = "固定本文";
		const expectedDate = "2020-01-01";

		const targetTitle = await page.locator("h1").innerText();
		const targetBody = await page.locator("p[data-test-id='diary-body']").innerText();
		const targetDate = await page.locator("p[data-test-id='diary-date']").innerText();

		expect(targetTitle).toEqual(expectedTitle);
		expect(targetBody).toEqual(expectedBody);
		expect(targetDate).toEqual(expectedDate);
	})
  
});
