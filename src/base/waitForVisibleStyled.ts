import { Page, PageFnOptions } from "puppeteer";
import createWaitForVisibleStyled from "../core/factories/createWaitForVisibleStyled";

/**
 * Wait for an element is visible inside browser page context directly
 * @param page - Page to interact
 * @param selector - Element selector
 * @param options - Options for page.waitForFunction
 * @returns True if element is visible
 */
export function waitForVisibleStyled(page: Page, selector: string, options?: PageFnOptions) {
  const run = createWaitForVisibleStyled(selector, options);
  return run(page);
}

export default waitForVisibleStyled;
