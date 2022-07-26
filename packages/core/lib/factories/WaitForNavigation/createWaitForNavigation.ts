import merge from "lodash/merge";
import { WaitForOptions, Page } from "puppeteer";

const BASE_OPTIONS: WaitForOptions = { waitUntil: 'networkidle2' };

/**
 * Create a function that wait page navigation
 * @param navigationOptions - Options for page.waitForNavigation
 * @returns function that wait page navigation
 */
export function createWaitForNavigation(navigationOptions?: WaitForOptions) {
  return function waitForNavigationInternal(page: Page, overrideNavigationOptions?: WaitForOptions) {
    return page.waitForNavigation(merge({}, BASE_OPTIONS, navigationOptions || {}, overrideNavigationOptions || {}));
  }
}

export default createWaitForNavigation;
