import { ElementHandle, EvaluateFunc, Page, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndRun from "../WaitForSelectorAndRun/createWaitForSelectorAndRun";

/**
 * Create a generic function that wait an element to be visible and call the given callback inside the browser context
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function that wait an element to be visible and call the given callback inside the browser context
 */
export function createWaitForSelectorAndRunEvaluated(selector: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndRun(selector, waitOptions);
  return async <Params extends unknown[], Func extends EvaluateFunc<[ElementHandle<Element> | null, ...Params[]]> = EvaluateFunc<[ElementHandle<Element> | null, ...Params[]]>>(page: Page, fn: Func, ...args: Params[]) => {
    const result = await run(page, (el) => page.evaluate(fn, el, ...args));

    return result;
  };
}

export default createWaitForSelectorAndRunEvaluated;
