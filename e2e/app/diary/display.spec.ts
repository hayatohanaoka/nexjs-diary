import { test, expect } from "@playwright/test";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
  await page.goto("/diary");
  const expectedText = "日記帳アプリ";

  const target = await page.locator("div h1")
  await expect(target).toHaveText(expectedText);
})

test("ユーザーはタイトル下部のリンクから適切なページに遷移することができる", async ({ page }) => {
	const expectedShowPageLinkText   = "日記の閲覧";
	const expectedCreatePageLinkText = "日記の新規作成";
	const expectedDeletePageLinkText = "日記の削除";
	const expectedUpdatePageLinkText = "日記の編集";

	const expectedShowLinkUrl   = "日記の閲覧";
	const expectedCreateLinkUrl = "日記の新規作成";
	const expectedDeleteLinkUrl = "日記の削除";
	const expectedUpdateLinkUrl = "日記の編集";

	const showDiaryLinkElem   = await page.locator("a[data-test-id='show-diary-link']");
	const createDiaryLinkElem = await page.locator("a[data-test-id='update-diary-link']");
	const deleteDiaryLinkElem = await page.locator("a[data-test-id='delete-diary-link']");
	const updateDiaryLinkElem = await page.locator("a[data-test-id='update-diary-link']");

	await expect(showDiaryLinkElem).toHaveValue(expectedShowPageLinkText);
	await expect(createDiaryLinkElem).toHaveValue(expectedCreatePageLinkText);
	await expect(deleteDiaryLinkElem).toHaveValue(expectedDeletePageLinkText);
	await expect(updateDiaryLinkElem).toHaveValue(expectedUpdatePageLinkText);

	await expect(showDiaryLinkElem).toHaveAttribute("href", expectedShowLinkUrl);
	await expect(createDiaryLinkElem).toHaveAttribute("href", expectedCreateLinkUrl);
	await expect(deleteDiaryLinkElem).toHaveAttribute("href", expectedDeleteLinkUrl);
	await expect(updateDiaryLinkElem).toHaveAttribute("href", expectedUpdateLinkUrl);
})
