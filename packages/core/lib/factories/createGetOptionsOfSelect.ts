import { Page } from "puppeteer";

export type SelectOptionInfo = {
  label: string;
  value: string;
};

/**
 * Create a function to retrieve label and value of select options
 * @param selectSelector - Select element selector
 * @returns function that retrieve label and value of select options
 */
export function createGetOptionsOfSelect(selectSelector: string) {
  return function getOptionsOfSelectInternal(page: Page): Promise<SelectOptionInfo[]> {
    return page.evaluate((selector) => {
      const elements = document.querySelectorAll<HTMLOptionElement>(`${selector} > option`);
      return Array.from(elements).map(({ textContent, value }) => ({
        label: textContent?.trim() as string,
        value: value
      }));
    }, selectSelector);
  }
}

export default createGetOptionsOfSelect;
