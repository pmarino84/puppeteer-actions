import { ElementHandle, Page, WaitForSelectorOptions } from "puppeteer";

/**
 * Create a generic function that wait an element to be visible and call the given callback.
 * This factory is used by:
 * - {@link createWaitForSelectorAndClick}
 * - {@link createWaitForSelectorAndSelect}
 * - {@link createWaitForSelectorAndType}
 * @param selector - Element selector
 * @param waitOptions - Options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function that wait an element to be visible and call the given callback
 */
export function createWaitForSelectorAndRun<T = void, E extends Element = Element>(selector: string, waitOptions?: WaitForSelectorOptions) {
  return async function waitForSelectorAndRunInternal(page: Page, cb: (element: ElementHandle<E>) => Promise<T>) {
    const el = await page.waitForSelector(selector, waitOptions);
    return cb && await cb(el);
  }
}

export default createWaitForSelectorAndRun;
