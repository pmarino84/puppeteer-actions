import { ClickOptions, WaitForSelectorOptions } from "puppeteer";

export type WaitForSelectorAndClickOptions = {
  waitOptions?: WaitForSelectorOptions;
  clickOptions?: ClickOptions;
};
