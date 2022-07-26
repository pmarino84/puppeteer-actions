import { Page } from "puppeteer";
import createWaitForSelectorAndClickEvaluated from "../WaitForSelectorAndClickEvaluated/createWaitForSelectorAndClickEvaluated";
import createWaitForVisible from "../WaitForVisible/createWaitForVisible";
import createWaitForVisibleStyled from "../WaitForVisibleStyled/createWaitForVisibleStyled";
import { CookiesBannerManagerEvaluatedOptions } from "./types";

/**
 * {@inheritDoc createCookiesBannerManager}
 * Same as {@link createCookiesBannerManager} but use evaluated function for clicks.
 */
export function createCookiesBannerManagerEvaluated(bannerSelector: string, acceptButtonSelector: string, declineButtonSelector: string, options?: CookiesBannerManagerEvaluatedOptions & { useWaitForVisibleStyled?: boolean; }) {
  const useWaitForVisibleStyled = options && 'useWaitForVisibleStyled' in options ? options.useWaitForVisibleStyled : true;

  const waitForVisibleStyled = (useWaitForVisibleStyled ? createWaitForVisibleStyled : createWaitForVisible)(bannerSelector, options?.pageFnOptions);
  const waitForSelectorAndClickAccept = createWaitForSelectorAndClickEvaluated(acceptButtonSelector, options?.acceptButtonWaitOptions)
  const waitForSelectorAndClickDecline = createWaitForSelectorAndClickEvaluated(declineButtonSelector, options?.declineButtonWaitOptions)

  return function cookiesBannerManagerEvaluatedInternal(page: Page, overrideOptions?: CookiesBannerManagerEvaluatedOptions) {
    const createActionFunction = (cb: () => Promise<void>) => {
      return async () => {
        await waitForVisibleStyled(page, overrideOptions?.pageFnOptions);
        await cb();
      }
    };

    return {
      accept: createActionFunction(() => waitForSelectorAndClickAccept(page, overrideOptions?.acceptButtonWaitOptions)),
      decline: createActionFunction(() => waitForSelectorAndClickDecline(page, overrideOptions?.declineButtonWaitOptions))
    };
  }
}

export default createCookiesBannerManagerEvaluated;
