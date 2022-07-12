import { Page } from "puppeteer";
import createGetElementText from "../core/factories/createGetElementText";

export type ElementWithTextFields = {
  value: string;
  textContent: string | null;
  innerText: string;
  innerHTML: string;
};

/**
 * Retrieve text of the element field
 * @param page - Page to interact
 * @param selector - Element selector
 * @param field - Element field
 * @returns text of the element field
 */
export async function getElementText<T extends Element & ElementWithTextFields & Record<string, any>, K extends keyof ElementWithTextFields = keyof ElementWithTextFields>(
  page: Page,
  selector: string,
  field: K
): Promise<T[K] | null> {
  // const text = await page.evaluate((internalSelector, internalField) => {
  //   const el = document.querySelector<T>(internalSelector);

  //   if (el) {
  //     const value = el[internalField] as string;

  //     if (value !== null && typeof value !== 'undefined') {
  //       return value.trim();
  //     }

  //     return null;
  //   }
  // }, selector, field);

  // return text as T[K];
  const getElementTextInternal = createGetElementText(selector, field);
  return getElementTextInternal(page);
}

export const getInputText = (page: Page, selector: string) => getElementText<HTMLInputElement>(page, selector, 'value');

export const getOptionText = (page: Page, selector: string) => getElementText<HTMLOptionElement>(page, selector, 'textContent');

export default getElementText;
