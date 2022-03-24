import { Page } from "puppeteer";
import isReadonly from "./isReadonly";

/**
 * Return True if element is not readonly, False otherwise
 * @param page - Page to interact
 * @param selector - Element selector
 * @returns True if element is not readonly, False otherwise
 */
export async function isNotReadonly(page: Page, selector: string) {
  return !(await isReadonly(page, selector));
}

export default isNotReadonly;
