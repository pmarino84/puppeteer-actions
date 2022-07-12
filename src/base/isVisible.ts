import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForVisible from "../core/factories/createWaitForVisible";

/**
 * Return True if element is visible, False otherwise
 * @param page - Page to interact
 * @param selector - Element selector
 * @param waitOptions - Options for page.waitForSelector
 * @returns True if element is visible, False otherwise
 */
export async function isVisible(page: Page, selector: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForVisible(selector, waitOptions);

  try {
    await run(page);
  } catch (ex) {
    return false;
  }

  return true;
}

export default isVisible;
