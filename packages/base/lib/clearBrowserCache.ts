import { Page } from "puppeteer";
import getCDPSession from "./getCDPSession";

/**
 * Clear the site cache
 * @param page - Page to interact
 */
export async function clearBrowserCache(page: Page) {
  await (await getCDPSession(page)).send('Network.clearBrowserCache');
}

export default clearBrowserCache;
