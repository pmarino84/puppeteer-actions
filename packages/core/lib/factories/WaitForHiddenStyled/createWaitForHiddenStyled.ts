import merge from "lodash/merge";
import { Page } from "puppeteer";
import { PageFnOptions } from "../types";

const BASE_OPTIONS: PageFnOptions = {
  polling: 100
};

/**
 * Create a function to wait an element is hidden. Under the hood use page.waitForFunction
 * @param selector - Element selector
 * @param options - Options for page.waitForFunction
 * @returns function to wait an element is hidden
 */
export function createWaitForHiddenStyled(selector: string, options?: PageFnOptions) {
  return async function waitForHiddenStyledInternal(page: Page, overrideOptions?: PageFnOptions) {
    const internalOptions = merge({}, BASE_OPTIONS, options || {}, overrideOptions || {});
    const result = await page.waitForFunction((internalSelector) => {
      const el = document.querySelector(internalSelector);

      if (!el) {
        return false;
      }

      const computedStyle = window.getComputedStyle(el);
      return computedStyle.display === 'none';
    }, internalOptions, selector);

    return !!result;
  }
}

export default createWaitForHiddenStyled;
