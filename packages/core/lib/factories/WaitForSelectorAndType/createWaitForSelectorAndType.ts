import merge from "lodash/merge";
import { Page } from "puppeteer";
import createWaitForSelectorAndRun from "../WaitForSelectorAndRun/createWaitForSelectorAndRun";
import { WaitForSelectorAndTypeOptions } from "./types";

/**
 * Create a function to type given text to an element
 * @param selector - Element selector
 * @param options - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector) and element.type
 * @returns function to type given text to an element
 */
export function createWaitForSelectorAndType(selector: string, options?: WaitForSelectorAndTypeOptions) {
  return function waitForSelectorAndTypeInternal(page: Page, text: string, overrideOptions?: WaitForSelectorAndTypeOptions) {
    const internalWaitOptions = merge({}, (options && options.waitOptions) || {}, (overrideOptions && overrideOptions.waitOptions) || {});
    const internalTypeOptions = merge({ delay: 10 }, (options && options.typeOptions) || {}, (overrideOptions && overrideOptions.typeOptions) || {});
    const run = createWaitForSelectorAndRun(selector, internalWaitOptions);
    return run(page, (el) => el ? (el as any).type(text, internalTypeOptions) : undefined)
  }
}

export default createWaitForSelectorAndType;
