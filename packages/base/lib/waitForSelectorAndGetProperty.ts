import { Page, WaitForSelectorOptions } from "puppeteer";
import { createWaitForSelectorAndGetProperty } from "@puppeteer-actions/core";

/**
 * Return value of given property
 * @param page - Page to interact
 * @param selector - Element selector
 * @param propertyName - Property mane
 * @param waitOptions - Options for page.waitForSelector
 * @returns Value of given property
 */
export function waitForSelectorAndGetProperty<V>(page: Page, selector: string, propertyName: string, waitOptions?: WaitForSelectorOptions) {
  const run = createWaitForSelectorAndGetProperty(selector, waitOptions);
  return run<V>(page, propertyName);
}
