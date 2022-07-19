import { Page } from "puppeteer";

export type ElementWithTextFields = {
  value: string;
  textContent: string | null;
  innerText: string;
  innerHTML: string;
};

/**
 * function that retrieve text of the element field
 * @param selector - Element selector
 * @param field - Element field
 * @returns function that retrieve text of the element field
 */
export function createGetElementText<T extends Element & ElementWithTextFields & Record<string, any>, K extends keyof ElementWithTextFields = keyof ElementWithTextFields>(
  selector: string,
  field?: K
) {
  return async function getElementTextInternal(page: Page, fieldOverride?: K): Promise<T[K] | null> {
    if (!field || !fieldOverride) {
      throw new Error('field not found');
    }

    const text = await page.evaluate((internalSelector, internalField) => {
      const el = document.querySelector<T>(internalSelector);

      if (el) {
        const value = el[internalField] as string;

        if (value !== null && typeof value !== 'undefined') {
          return value.trim();
        }

        return null;
      }
    }, selector, field || fieldOverride);

    return text as T[K];
  }
}

export default createGetElementText;
