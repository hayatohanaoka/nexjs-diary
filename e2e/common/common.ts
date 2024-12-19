import { test, expect } from "@playwright/test";

export async function assertHeader(url, expectedHeaderText, page) {
	await page.goto(url);
	const expectedText = expectedHeaderText;
	
	const target = await page.locator("div h1");
	await expect(target).toHaveText(expectedText);
}
