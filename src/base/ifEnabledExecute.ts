import { Page } from "puppeteer";
import isDisabled from "./isDisabled";

/**
 * Execute given function if the element is enabled
 * @param page - Page to interact
 * @param selector - Element selector
 * @param fn - Function to execute
 */
export async function ifEnabledExecute(page: Page, selector: string, fn: () => Promise<void> | void) {
  if (!(await isDisabled(page, selector))) {
    await fn();
  }
}

export default ifEnabledExecute;
