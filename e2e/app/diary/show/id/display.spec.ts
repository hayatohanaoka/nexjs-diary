import { test, expect, Page } from "@playwright/test";
import { assertHeader } from "../../../../common/common";

test.describe("日記の閲覧画面の表示テスト", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/diary/show/1");
	})

	test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
		await assertHeader("/diary/create", "日記帳アプリ", page);
	})

	test("ユーザーは「id=1」の日記の内容を閲覧することができる", async ({ page }) => {
		const expectedId = "Diary ID: 1";
		const expectedTitle = "Title: 固定タイトル";
		const expectedBody = "固定本文";
		const expectedDate = "Write date: 2020-01-01";

		const targetId = await page.locator("h3[data-test-id='diary-id']").innerText();
		const targetTitle = await page.locator("h3[data-test-id='diary-title']").innerText();
		const targetBody = await page.locator("h3[data-test-id='diary-body']").innerText();
		const targetDate = await page.locator("h3[data-test-id='diary-date']").innerText();

		expect(targetId).toEqual(expectedId);
		expect(targetTitle).toEqual(expectedTitle);
		expect(targetBody).toEqual(expectedBody);
		expect(targetDate).toEqual(expectedDate);
	})
});
