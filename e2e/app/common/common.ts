import { test, expect } from "@playwright/test";

export async function assertHeader(url, expectedHeaderText, page) {
	const expectedText = expectedHeaderText;
	
	await page.goto(url);
	const target = await page.locator("div h1");
	await expect(target).toHaveText(expectedText);
}
