import { Page } from "puppeteer";
import getCDPSession from "./getCDPSession";

/**
 * Set donwload folder path for the given page
 * @param page - Page to interact
 * @param downloadPath - path of download folder
 */
export async function setDownloadPath(page: Page, downloadPath: string) {
  const client = await getCDPSession(page);
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath
  });
}

export default setDownloadPath;
