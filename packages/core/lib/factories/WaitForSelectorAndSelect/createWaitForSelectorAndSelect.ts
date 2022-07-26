import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRun from "../WaitForSelectorAndRun/createWaitForSelectorAndRun";

/**
 * Create a function to select given values
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to select given values
 */
export function createWaitForSelectorAndSelect(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForSelectorAndSelectInternal(page: Page, values: string[], overrideWaitOptions?: WaitForSelectorOptions) {
    const internalOptions = merge({}, waitOptions || {}, overrideWaitOptions || {});
    const run = createWaitForSelectorAndRun<string[]>(selector, internalOptions);
    return run(page, (el) => el ? el.select(...values) : Promise.resolve([]));
  }
}

export default createWaitForSelectorAndSelect;
