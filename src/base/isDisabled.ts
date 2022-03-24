import { Page } from "puppeteer";

/**
 * Return True if element is disabled, False otherwise
 * @param page - Page to interact
 * @param selector - Element selector
 * @returns True if element is disabled, False otherwise
 */
export function isDisabled(page: Page, selector: string): Promise<boolean> {
  return page.evaluate((sel) => {
    const el = document.querySelector<{ disabled: boolean; } & Element>(sel);
    return !!el?.disabled;
  }, selector);
}

export default isDisabled;
