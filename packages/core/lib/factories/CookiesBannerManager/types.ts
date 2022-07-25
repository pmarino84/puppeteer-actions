import { PageFnOptions } from "../types";
import { WaitForSelectorAndClickOptions } from "../createWaitForSelectorAndClick";

export type CookiesBannerManagerOptions = {
  pageFnOptions?: PageFnOptions;
  acceptButtonOptions?: WaitForSelectorAndClickOptions;
  declineButtonOptions?: WaitForSelectorAndClickOptions;
};
