import { NavigationOptions, Page } from "puppeteer";
import { createWaitForNavigation } from "@puppeteer-actions/core";

/**
 * Wait for page navigation
 * @param page - Page to interact
 * @param options - Options for page.waitForNavigation
 * @returns Request response
 */
export function waitForNavigation(page: Page, options?: NavigationOptions) {
  const run = createWaitForNavigation(options);
  return run(page);
}

export default waitForNavigation;
