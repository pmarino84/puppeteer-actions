import { Page } from "puppeteer";
import createWaitForSelectorAndClick from "../WaitForSelectorAndClick/createWaitForSelectorAndClick";
import createWaitForVisible from "../createWaitForVisible";
import createWaitForVisibleStyled from "../createWaitForVisibleStyled";
import { CookiesBannerManagerOptions } from "./types";

/**
 * Create a factory of cookie banner manager
 * @param bannerSelector - Banner selector
 * @param acceptButtonSelector  - Accept button selector
 * @param declineButtonSelector - Decline button selector
 * @param options - Options to control the manager behavior
 * @returns cookie banner manager factory
 */
export function createCookiesBannerManager(bannerSelector: string, acceptButtonSelector: string, declineButtonSelector: string, options?: CookiesBannerManagerOptions & { useWaitForVisibleStyled?: boolean; }) {
  const useWaitForVisibleStyled = options && 'useWaitForVisibleStyled' in options ? options.useWaitForVisibleStyled : true;

  const waitForVisibleStyled = (useWaitForVisibleStyled ? createWaitForVisibleStyled : createWaitForVisible)(bannerSelector, options?.pageFnOptions);
  const waitForSelectorAndClickAccept = createWaitForSelectorAndClick(acceptButtonSelector, options?.acceptButtonOptions)
  const waitForSelectorAndClickDecline = createWaitForSelectorAndClick(declineButtonSelector, options?.declineButtonOptions)

  return function cookiesBannerManagerInternal(page: Page, overrideOptions?: CookiesBannerManagerOptions) {
    const createActionFunction = (cb: () => Promise<void>) => {
      return async () => {
        await waitForVisibleStyled(page, overrideOptions?.pageFnOptions);
        await cb();
      }
    };

    return {
      accept: createActionFunction(() => waitForSelectorAndClickAccept(page, overrideOptions?.acceptButtonOptions)),
      decline: createActionFunction(() => waitForSelectorAndClickDecline(page, overrideOptions?.declineButtonOptions))
    };
  }
}

export default createCookiesBannerManager;
