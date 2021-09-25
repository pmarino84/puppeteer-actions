import { NavigationOptions, Page } from "puppeteer";

export default function waitForNavigation(page: Page, options?: NavigationOptions) {
  return page.waitForNavigation({ waitUntil: 'networkidle2', ...options })
}
