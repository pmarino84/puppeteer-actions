import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";

/**
 * Create a function for wait element is visible, use [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector) under the hood
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function for wait element is visible
 */
export function createWaitForVisible(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForVisibleInternal(page: Page, overrideWaitOptions?: WaitForSelectorOptions) {
    return page.waitForSelector(selector, merge({}, waitOptions || {}, overrideWaitOptions || {}, { visible: true }));
  }
}

export default createWaitForVisible;
