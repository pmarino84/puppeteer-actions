import { Page } from "puppeteer";
import createCookiesBannerManagerEvaluated, { CookiesBannerManagerEvaluatedOptions } from "../core/factories/createCookiesBannerManagerEvaluated";

/**
 * Decline cookies. Use CookiesBannerManager created with {@link createCookiesBannerManagerEvaluated} under the hood
 * @param page - Page to interact
 * @param bannerSelector - Cookie banner element selector
 * @param declineButtonSelector - Cookie decline button element selector
 * @param options - Options for CookiesBannerManager
 */
export async function declineCookiesEvaluated(page: Page, bannerSelector: string, declineButtonSelector: string, options?: CookiesBannerManagerEvaluatedOptions) {
  const manager = createCookiesBannerManagerEvaluated(bannerSelector, declineButtonSelector, '', options);
  return manager(page).decline();
}

export default declineCookiesEvaluated;
