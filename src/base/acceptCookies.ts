import { Page } from "puppeteer";
import createCookiesBannerManager, { CookiesBannerManagerOptions } from "../core/factories/createCookiesBannerManager";

/**
 * Accept cookies. Use CookiesBannerManager created with {@link createCookiesBannerManager} under the hood
 * @param page - Page to interact
 * @param bannerSelector - Cookie banner element selector
 * @param acceptButtonSelector - Cookie accept button element selector
 * @param options - Options for CookiesBannerManager
 */
export async function acceptCookies(page: Page, bannerSelector: string, acceptButtonSelector: string, options?: CookiesBannerManagerOptions) {
  const manager = createCookiesBannerManager(bannerSelector, acceptButtonSelector, '', options);
  return manager(page).accept();
}

export default acceptCookies;
