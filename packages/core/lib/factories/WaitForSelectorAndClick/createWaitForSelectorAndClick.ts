import merge from "lodash/merge";
import { Page } from "puppeteer";
import createWaitForSelectorAndRun from "../WaitForSelectorAndRun/createWaitForSelectorAndRun";
import { WaitForSelectorAndClickOptions } from "./types";

/**
 * Create a function to click on an element
 * @param selector - Element selector
 * @param options - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector) and element.click
 * @returns function to click on an element
 */
export function createWaitForSelectorAndClick(selector: string, options?: WaitForSelectorAndClickOptions) {
  return async function waitForSelectorAndClickInternal(page: Page, overrideOptions?: WaitForSelectorAndClickOptions) {
    const internalWaitOptions = merge({}, (options && options.waitOptions) || {}, (overrideOptions && overrideOptions.waitOptions) || {});
    const internalClickOptions = merge({}, (options && options.clickOptions) || {}, (overrideOptions && overrideOptions.clickOptions) || {});
    const run = createWaitForSelectorAndRun(selector, internalWaitOptions);
    await run(page, (el) => el ? el.click(internalClickOptions) : Promise.resolve());
  }
}

export default createWaitForSelectorAndClick;
