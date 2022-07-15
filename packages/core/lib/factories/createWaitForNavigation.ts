import merge from "lodash/merge";
import { NavigationOptions, Page } from "puppeteer";

const BASE_OPTIONS: NavigationOptions = { waitUntil: 'networkidle2' };

/**
 * Create a function that wait page navigation
 * @param navigationOptions - Options for page.waitForNavigation
 * @returns function that wait page navigation
 */
export function createWaitForNavigation(navigationOptions?: NavigationOptions) {
  return function waitForNavigationInternal(page: Page, overrideNavigationOptions?: NavigationOptions) {
    return page.waitForNavigation(merge({}, BASE_OPTIONS, navigationOptions || {}, overrideNavigationOptions || {}));
  }
}

export default createWaitForNavigation;
