import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRun from "../WaitForSelectorAndRun/createWaitForSelectorAndRun";

/**
 * Create a function to retrieve a property of an element
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to retrieve a given property of an element
 */
export function createWaitForSelectorAndGetProperty(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForSelectorAndGetPropertyInternal<V>(page: Page, propertyName: string, overrideWaitOptions?: WaitForSelectorOptions) {
    const internalOptions = merge({}, waitOptions || {}, overrideWaitOptions || {});
    const run = createWaitForSelectorAndRun<V>(selector, internalOptions);
    return run(page, async (el) => {
      const property = (await el?.getProperty(propertyName));
      const value = await property?.jsonValue();

      return value as V;
    });
  }
}

export default createWaitForSelectorAndGetProperty;
