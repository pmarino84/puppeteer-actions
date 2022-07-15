import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForSelectorAndClickEvaluated } from "@puppeteer-actions/core";

/**
 * Wait for an element and click on it inside browser page context directly
 * @param page - Page to interact
 * @param selector - Element selector
 * @param waitOptions - Options for page.waitForSelector
 */
export function waitForSelectorAndClickEvaluated(page: Page, selector: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndClickEvaluated(selector, waitOptions);
  return run(page);
}

export default waitForSelectorAndClickEvaluated;
