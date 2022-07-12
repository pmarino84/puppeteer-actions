import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForSelectorAndRunEvaluated } from "./createWaitForSelectorAndRunEvaluated";

/**
 * Create a function for click on an element. Use page.evaluate to click on the element inside the browser context directly
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function for click on an element
 */
export function createWaitForSelectorAndClickEvaluated(selector: string, waitOptions?: WaitForSelectorOptions) {
  return async function waitForSelectorAndClickEvaluatedInternal(page: Page, overrideWaitOptions?: WaitForSelectorOptions) {
    const internalWaitOptions = merge({}, waitOptions || {}, overrideWaitOptions || {});
    const run = createWaitForSelectorAndRunEvaluated(selector, internalWaitOptions);
    await run(page, (el) => el.click());
  }
}

export default createWaitForSelectorAndClickEvaluated;
