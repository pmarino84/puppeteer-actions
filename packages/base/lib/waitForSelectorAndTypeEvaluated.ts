import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForSelectorAndTypeEvaluated } from "@puppeteer-actions/core";

/**
 * Wait for an element and type given text into it inside browser context page directly
 * @param page - Page to interact
 * @param selector - Element selector
 * @param text - Text to type
 * @param waitOptions - Options for page.waitForSelector
 */
export function waitForSelectorAndTypeEvaluated(page: Page, selector: string, text: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndTypeEvaluated(selector, waitOptions);
  return run(page, text);
}

export default waitForSelectorAndTypeEvaluated;
