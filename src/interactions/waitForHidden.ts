import { Page, WaitForSelectorOptions } from "puppeteer";

export default function waitForHidden(selector: string, options?: WaitForSelectorOptions) {
  return (page: Page, overrideOptions?: WaitForSelectorOptions) => page.waitForSelector(selector, { ...(options || {}), ...(overrideOptions || {}), hidden: true });
}
