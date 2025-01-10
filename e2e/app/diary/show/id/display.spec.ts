import { test, expect, Page } from "@playwright/test";
import { assertHeader } from "../../../../common/common";

test.describe("日記の 詳細画面の表示テスト", () => {
	test.describe("正常系" , () => {
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

		test("ユーザーは日記の一覧へ戻ることができる", async ({ page }) => {
			const expectedLinkUrl = "/diary/show";
			const expectedLinkText = "日記一覧へ戻る";

			const targetLink= await page.locator("a[data-test-id='list-link']")
			const targetLinkUrl = await targetLink.getAttribute("href");
			const targetLinkText = await targetLink.innerText();
		
			expect(targetLinkUrl).toEqual(expectedLinkUrl);
			expect(targetLinkText).toEqual(expectedLinkText);
		})

		test("ユーザーは日記の詳細から編集ページに遷移できる", async ({ page }) => {
			const expectedLink = "/diary/edit/1";
			const expectedLinkText = "日記を編集する";

			const targetLink = await page.locator("a[data-test-id='edit-link']");
			const targetLinkUrl = await targetLink.getAttribute("href");
			const targetLinkText = await targetLink.innerText();

			expect(targetLinkUrl).toEqual(expectedLink);
			expect(targetLinkText).toEqual(expectedLinkText);
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
			const targetText = await targetMessage.locator("p").innerText();

			const targetLink= await targetMessage.locator("a")
			const targetLinkUrl = await targetLink.getAttribute("href");
			const targetLinkText = await targetLink.innerText();
	
			expect(targetText).toEqual(expectedText);
			expect(targetLinkUrl).toEqual(expectedLinkUrl);
			expect(targetLinkText).toEqual(expectedLinkText);
		})
	})
});
