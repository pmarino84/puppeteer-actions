import merge from "lodash/merge";
import { Page } from "puppeteer";
import { PageFnOptions } from "./types";

const BASE_OPTIONS: PageFnOptions = {
  polling: 100
};

/**
 * Create a function for wait element is visible, use page.waitForFunction under the hood
 * @param selector - Element selector
 * @param options - Options for page.waitForFunction
 * @returns function for wait element is visible
 */
export function createWaitForVisibleStyled(selector: string, options?: PageFnOptions) {
  return async function waitForHiddenStyledInternal(page: Page, overrideOptions?: PageFnOptions) {
    const internalOptions = merge({}, BASE_OPTIONS, options || {}, overrideOptions || {});
    const result = await page.waitForFunction((internalSelector) => {
      const el = document.querySelector(internalSelector);

      if (!el) {
        return false;
      }

      const computedStyle = window.getComputedStyle(el);
      return computedStyle.display.includes('block');
    }, internalOptions, selector);

    return !!result;
  }
}

export default createWaitForVisibleStyled;
