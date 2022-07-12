import { Page, PageFnOptions } from "puppeteer";
import createWaitForHiddenStyled from "../core/factories/createWaitForHiddenStyled";

/**
 * Wait for element is hidden by computed style
 * @param page - Page to interact
 * @param selector - Element selector
 * @param options - Options for page.waitForFunction
 * @returns True if element is hidden
 */
export function waitForHiddenStyled(page: Page, selector: string, options?: PageFnOptions) {
  const run = createWaitForHiddenStyled(selector, options);
  return run(page);
}

export default waitForHiddenStyled;
