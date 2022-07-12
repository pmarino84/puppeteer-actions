import { Page } from "puppeteer";
import isDisabled from "./isDisabled";

/**
 * Return True if element is enabled, False otherwise
 * @param page - Page to interact
 * @param selector - Element selector
 * @returns True if element is enabled, False otherwise
 */
export async function isEnabled(page: Page, selector: string) {
  return !(await isDisabled(page, selector));
}

export default isEnabled;
