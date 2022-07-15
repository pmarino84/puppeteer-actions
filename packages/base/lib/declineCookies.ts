import { Page } from "puppeteer";
import { createCookiesBannerManager, CookiesBannerManagerOptions } from "@puppeteer-actions/core";

/**
 * Decline cookies. Use CookiesBannerManager created with {@link createCookiesBannerManager} under the hood
 * @param page - Page to interact
 * @param bannerSelector - Cookie banner element selector
 * @param declineButtonSelector - Cookie decline button element selector
 * @param options - Options for CookiesBannerManager
 */
export async function declineCookies(page: Page, bannerSelector: string, declineButtonSelector: string, options?: CookiesBannerManagerOptions) {
  const manager = createCookiesBannerManager(bannerSelector, declineButtonSelector, '', options);
  return manager(page).decline();
}

export default declineCookies;
