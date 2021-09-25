import { ElementHandle, Page, WaitForSelectorOptions } from "puppeteer";

const waitForSelectorAndRun = <E extends Element = Element>(page: Page, selector: string, options?: WaitForSelectorOptions) => async <T = void>(cb: (element: ElementHandle<E>) => Promise<T>) => {
  const el = await page.waitForSelector(selector, options);
  return cb && await cb(el);
};

export default waitForSelectorAndRun;
