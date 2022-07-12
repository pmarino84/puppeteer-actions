import { Page } from "puppeteer";
import createCookiesBannerManagerEvaluated, { CookiesBannerManagerEvaluatedOptions } from "../core/factories/createCookiesBannerManagerEvaluated";

/**
 * Accept cookies inside the browser page context directly. Use CookiesBannerManager created with {@link createCookiesBannerManagerEvaluated} under the hood
 * @param page - Page to interact
 * @param bannerSelector - Cookie banner element selector
 * @param acceptButtonSelector - Cookie accept button element selector
 * @param options - Options for CookiesBannerManager
 */
export async function acceptCookiesEvaluated(page: Page, bannerSelector: string, acceptButtonSelector: string, options?: CookiesBannerManagerEvaluatedOptions) {
  const manager = createCookiesBannerManagerEvaluated(bannerSelector, acceptButtonSelector, '', options);
  return manager(page).accept();
}

export default acceptCookiesEvaluated;
