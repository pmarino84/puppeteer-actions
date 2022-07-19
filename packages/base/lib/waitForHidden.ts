import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForHidden } from "@puppeteer-actions/core";

/**
 * Wait for element hidden and return it's handle
 * @param page - Page to interact
 * @param selector - Element selector
 * @param options - Options for page.waitForSelector
 * @returns return ElementHandle
 */
export function waitForHidden(page: Page, selector: string, options?: WaitForSelectorOptions) {
  const run = createWaitForHidden(selector, options);
  return run(page);
}

export default waitForHidden;
