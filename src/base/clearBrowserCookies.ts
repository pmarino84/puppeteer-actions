import { Page } from "puppeteer";
import getCDPSession from "./getCDPSession";

/**
 * Clear site cookies
 * @param page - Page to interact
 */
export async function clearBrowserCookies(page: Page) {
  await (await getCDPSession(page)).send('Network.clearBrowserCookies');
}

export default clearBrowserCookies;
