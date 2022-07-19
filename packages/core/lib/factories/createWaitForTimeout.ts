import { Page } from "puppeteer"

/**
 * Create a function for wait given milliseconds
 * @param milliseconds - Milliseconds to wait
 * @returns function for wait given milliseconds
 */
export function createWaitForTimeout(milliseconds: number) {
  return function waitForTimeoutInternal(page: Page) {
    return page.waitForTimeout(milliseconds);
  }
}

export default createWaitForTimeout;
