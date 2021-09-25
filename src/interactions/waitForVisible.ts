import { Page, WaitForSelectorOptions } from "puppeteer";

export default function waitForVisible(selector: string, options?: WaitForSelectorOptions) {
  return (page: Page, overrideOptions?: WaitForSelectorOptions) => page.waitForSelector(selector, { ...(options || {}), ...(overrideOptions || {}), visible: true });
}
