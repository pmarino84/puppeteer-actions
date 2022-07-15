import { EvaluateFn, Page, SerializableOrJSHandle, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRun from "./createWaitForSelectorAndRun";

/**
 * Create a generic function that wait an element to be visible and call the given callback inside the browser context
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function that wait an element to be visible and call the given callback inside the browser context
 */
export function createWaitForSelectorAndRunEvaluated(selector: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndRun(selector, waitOptions);
  return async <T = any>(page: Page, fn: EvaluateFn<T>, ...args: SerializableOrJSHandle[]) => {
    const result = await run(page, (el) => page.evaluate<EvaluateFn<T>>(fn, el, ...args));

    return result;
  };
}

export default createWaitForSelectorAndRunEvaluated;
