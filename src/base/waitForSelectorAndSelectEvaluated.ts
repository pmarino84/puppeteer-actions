import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndSelectEvaluated from "../core/factories/createWaitForSelectorAndSelectEvaluated";

/**
 * Wait for an element and select given values inside browser page context directly
 * @param page - Page to interact
 * @param selector - Element selector
 * @param values - Values to select
 * @param waitOptions - Options for page.waitForSelector
 */
export function waitForSelectorAndSelectEvaluated(page: Page, selector: string, values: string[], waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndSelectEvaluated(selector, waitOptions);
  return run(page, values);
}

export default waitForSelectorAndSelectEvaluated;
