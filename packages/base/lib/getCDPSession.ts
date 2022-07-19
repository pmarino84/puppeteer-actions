import { Page } from "puppeteer";

/**
 * Creates a Chrome Devtools Protocol session attached to the target.
 * @param page - Page to interact
 * @returns Chrome Devtools Protocol session
 */
export function getCDPSession(page: Page) {
  return page.target().createCDPSession();
}

export default getCDPSession;
