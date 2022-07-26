import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRunEvaluated from "../WaitForSelectorAndRunEvaluated/createWaitForSelectorAndRunEvaluated";

/**
 * Create a function to type given text to an element inside browser context directly
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to type given text to an element inside browser context directly
 */
export function createWaitForSelectorAndTypeEvaluated(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForSelectorAndTypeEvaluatedInternal(page: Page, text: string, overrideWaitOptions?: WaitForSelectorOptions) {
    const internalWaitOptions = merge({}, waitOptions || {}, overrideWaitOptions || {});
    const run = createWaitForSelectorAndRunEvaluated(selector, internalWaitOptions);
    return run(page, (el) => el ? (el as HTMLInputElement).value = text : undefined);
  }
}

export default createWaitForSelectorAndTypeEvaluated;
