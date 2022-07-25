import { WaitForSelectorOptions } from "puppeteer";
import { PageFnOptions } from "../types";

export type CookiesBannerManagerEvaluatedOptions = {
  pageFnOptions?: PageFnOptions;
  acceptButtonWaitOptions?: WaitForSelectorOptions;
  declineButtonWaitOptions?: WaitForSelectorOptions;
};
