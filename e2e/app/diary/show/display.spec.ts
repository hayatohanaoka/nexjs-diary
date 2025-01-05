import { test, expect } from "@playwright/test";
import { assertHeader } from "../../../common/common";

test.describe("日記の閲覧画面の表示テスト", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/diary/show");
  })

  test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる", async ({ page }) => {
    await assertHeader("/diary/create", "日記帳アプリ", page);
  })

  test("ユーザーは日記の項目ヘッダーが表示されているのを見ることができる", async ({ page }) => {
    const expectedHeaderItems = ["作成順", "日付", "タイトル", "本文"];
    const targetTableHeader = await page.locator("thead tr th").allInnerTexts();
    expect(targetTableHeader).toEqual(expectedHeaderItems);
  })

  test("ユーザーは日記の一覧の1番目が「1, 2020-01-01, 固定タイトル, 固定本文」であるのを見ることができる", async ({ page }) => {
    const expectedDairyDataList = [
      "1", "2020-01-01", "固定タイトル", "固定本文"
    ];
    const targetDIaryRow = await page.locator("tbody tr:nth-child(1) th").allInnerTexts();
    expect(targetDIaryRow).toEqual(expectedDairyDataList);
  })

  test("ユーザーは日記の一覧の「日記番号」に表示されたリンクから正しい日記の内容を確認することができる", async ({ page }) => {
    const expectedLink = "show/1";
    const targetLink = await page.locator("tbody tr:nth-child(1) a[data-test-id='diary-detail-link']").getAttribute("href");

    expect(targetLink).toEqual(expectedLink);
  })
})
