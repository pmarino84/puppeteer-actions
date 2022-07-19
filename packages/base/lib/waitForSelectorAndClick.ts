import { Page } from "puppeteer";
import { createWaitForSelectorAndClick, WaitForSelectorAndClickOptions } from "@puppeteer-actions/core";

/**
 * Wait for an element and click on it
 * @param page - Page to interact
 * @param selector - Element selector
 * @param options - Options for page.waitForSelector and element.click
 */
export function waitForSelectorAndClick(page: Page, selector: string, options?: WaitForSelectorAndClickOptions) {
  const run = createWaitForSelectorAndClick(selector, options);
  return run(page);
}

export default waitForSelectorAndClick;
