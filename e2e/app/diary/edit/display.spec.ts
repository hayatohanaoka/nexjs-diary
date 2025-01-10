import { test, expect } from "@playwright/test";
import { assertHeader } from "../../../common/common";

test("ユーザーはアプリケーションのタイトルとして「日記帳アプリ」と表示されているのを見ることができる",async ({ page }) => {
  await assertHeader("/diary/create", "日記帳アプリ", page);
})

