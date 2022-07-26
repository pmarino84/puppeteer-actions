import { PageFnOptions } from "../types";
import { WaitForSelectorAndClickOptions } from "../WaitForSelectorAndClick/types";

export type CookiesBannerManagerOptions = {
  pageFnOptions?: PageFnOptions;
  acceptButtonOptions?: WaitForSelectorAndClickOptions;
  declineButtonOptions?: WaitForSelectorAndClickOptions;
};
