import { Page, PageFnOptions, WaitForSelectorOptions } from "puppeteer";
import createWaitForSelectorAndClickEvaluated from "./createWaitForSelectorAndClickEvaluated";
import createWaitForVisible from "./createWaitForVisible";
import createWaitForVisibleStyled from "./createWaitForVisibleStyled";

export type CookiesBannerManagerEvaluatedOptions = {
  pageFnOptions?: PageFnOptions;
  acceptButtonWaitOptions?: WaitForSelectorOptions;
  declineButtonWaitOptions?: WaitForSelectorOptions;
};

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
