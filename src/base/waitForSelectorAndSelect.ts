import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndSelect from "../core/factories/createWaitForSelectorAndSelect";

/**
 * Wait for a element and select given values
 * @param page - Page to interact
 * @param selector - Element selector
 * @param values - Values to select
 * @param waitOptions - Options for page.waitForSelector
 * @returns selected values
 */
export function waitForSelectorAndSelect(page: Page, selector: string, values: string[], waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndSelect(selector, waitOptions);
  return run(page, values);
}

export default waitForSelectorAndSelect;
