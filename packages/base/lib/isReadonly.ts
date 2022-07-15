import { Page } from "puppeteer";

/**
 * Return True if element is readonly, False otherwise
 * @param page - Page to interact
 * @param selector - Element selector
 * @returns True if element is readonly, False otherwise
 */
export function isReadonly(page: Page, selector: string) {
  return page.evaluate((sel) => {
    const el = document.querySelector<HTMLElement>(sel);
    return !!el?.hasAttribute('readonly');
  }, selector);
}

export default isReadonly;
