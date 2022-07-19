import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForVisible } from "@puppeteer-actions/core";

/**
 * Wait for element is visible
 * @param page - Page to interact
 * @param selector - Element selector
 * @param options - Options for page.waitForSelector
 * @returns Element handle
 */
export function waitForVisible(page: Page, selector: string, options?: WaitForSelectorOptions) {
  const run = createWaitForVisible(selector, options);
  return run(page);
}

export default waitForVisible;
