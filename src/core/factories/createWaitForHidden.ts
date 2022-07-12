import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";

/**
 * Create a function to wait an element is hidden. Under the hood use [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @param selector - Element selector
 * @param waitOptions - options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to wait an element is hidden
 */
export function createWaitForHidden(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForHiddenInternal(page: Page, overrideWaitOptions?: WaitForSelectorOptions) {
    return page.waitForSelector(selector, merge({}, waitOptions || {}, overrideWaitOptions || {}, { hidden: true }));
  }
}

export default createWaitForHidden;
