import { WaitForSelectorOptions } from "puppeteer";

export type TypeOptions = {
  delay: number;
};

export type WaitForSelectorAndTypeOptions = {
  waitOptions?: WaitForSelectorOptions;
  typeOptions?: TypeOptions;
};
