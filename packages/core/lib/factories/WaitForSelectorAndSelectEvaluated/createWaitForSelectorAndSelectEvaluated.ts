import merge from "lodash/merge";
import { Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRunEvaluated from "../WaitForSelectorAndRunEvaluated/createWaitForSelectorAndRunEvaluated";

/**
 * Create a function to select given values inside browser context directly
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to select given values inside browser context directly
 */
export function createWaitForSelectorAndSelectEvaluated(selector: string, waitOptions?: WaitForSelectorOptions) {
  return function waitForSelectorAndSelectEvaluatedInternal(page: Page, values: string[], overrideWaitOptions?: WaitForSelectorOptions) {
    const internalOptions = merge({}, waitOptions || {}, overrideWaitOptions || {});
    const run = createWaitForSelectorAndRunEvaluated(selector, internalOptions);
    return run(page, (el) => {
      const options = el ? (el as HTMLSelectElement).options : [];
      const selectOption = (val: string) => {
        for (let i = 0; i < options.length; i++) {
          const el = options[i];
          if (el.value === val) {
            el.selected = true;
            break;
          }
        }
      };

      values.forEach(val => selectOption(val));

      return Array.from(options).filter(option => option.selected).map(option => option.value);
    });
  }
}

export default createWaitForSelectorAndSelectEvaluated;
