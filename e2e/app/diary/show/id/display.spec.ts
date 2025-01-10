import { test, expect, Page } from "@playwright/test";
import { assertHeader } from "../../../common/common";

test.describe("日記の 詳細画面の表示テスト", () => {
	test.describe("正常系" , () => {
		test.beforeEach(async ({ page }) => {
			await page.goto("/diary/show/1");
		})
	
		test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
			await assertHeader("/diary/show/1", "日記帳アプリ", page);
		})
	
		test("ユーザーは「id=1」の日記の内容を閲覧することができる", async ({ page }) => {
			const expectedDate = "2020年1月1日";
			const expectedTitle = "固定タイトル";
			const expectedBody = "固定本文";
	
			const targetDate = await page.locator("[data-test-id='written-date']");
			const targetTitle = await page.locator("[data-test-id='diary-title'] input");
			const targetBody = await page.locator("[data-test-id='diary-main'] textarea");
	
			await expect(targetDate).toHaveText(expectedDate);
			await expect(targetTitle).toHaveValue(expectedTitle);
			await expect(targetBody).toHaveValue(expectedBody);
		})

		test("ユーザーは日記の一覧へ戻ることができる", async ({ page }) => {
			const expectedLinkUrl = "/diary/show";
			const expectedLinkText = "日記一覧へ戻る";

			const targetLink = await page.locator("a[data-test-id='list-link']")
			
			await expect(targetLink).toHaveText(expectedLinkText);
			await expect(targetLink).toHaveAttribute("href", expectedLinkUrl);
		})
		
		test("ユーザーは日記の詳細から編集ページに遷移できる", async ({ page }) => {
			const expectedLinkUrl = "/diary/edit/1";
			const expectedLinkText = "日記を編集する";
			
			const targetLink = await page.locator("a[data-test-id='edit-link']");
			
			await expect(targetLink).toHaveAttribute("href", expectedLinkUrl);
			await expect(targetLink).toHaveText(expectedLinkText);
		})
	}),

	test.describe("異常系" , () => {
		test.beforeEach(async ({ page }) => {
			await page.goto("/diary/show/3");
		});

		test("ユーザーは「id=3」の日記が存在しないため、エラーページへ遷移する", async ({ page }) => {
			const expectedText = "指定されたIDの日記が存在しません";
			const expectedLinkUrl = "/diary/show";
			const expectedLinkText = "日記一覧へ戻る";
	
			const targetMessage = await page.locator("div[data-test-id='error-message']");
			const targetText = await targetMessage.locator("p");
			const targetLink = await targetMessage.locator("a");
	
			await expect(targetText).toHaveText(expectedText);
			await expect(targetLink).toHaveAttribute("href", expectedLinkUrl);
			await expect(targetLink).toHaveText(expectedLinkText);
		})
	})
});
