import { Page } from "puppeteer";
import { createWaitForSelectorAndType, WaitForSelectorAndTypeOptions } from "../core/factories/createWaitForSelectorAndType";

/**
 * Wait for an element and type given text into it
 * @param page - Page to interact
 * @param selector - Element selector
 * @param text - Text to type
 * @param options - Options for page.waitForSelecto and element.type
 */
export function waitForSelectorAndType(page: Page, selector: string, text: string, options?: WaitForSelectorAndTypeOptions) {
  const run = createWaitForSelectorAndType(selector, options);
  return run(page, text);
}

export default waitForSelectorAndType;
