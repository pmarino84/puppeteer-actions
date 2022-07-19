import { Page } from "puppeteer";

/**
 * Create function to retrieve options value to select by text label
 * @param selectSelector - Select element selector
 * @returns function to retrieve options value to select by text label
 */
export function createGetOptionsValueToSelectByTextList(selectSelector: string) {
  return function getOptionsValueToSelectByTextListInternal(page: Page, textToMatchList: string[]) {
    return page.evaluate((selector, textToFindList) => {
      const elements = document.querySelectorAll<HTMLOptionElement>(`${selector} > option`);
      const options = Array.from(elements).filter((item) => textToFindList.includes(item.textContent?.trim().toLowerCase()));

      return options.map(option => option.value);
    }, selectSelector, textToMatchList.map(text => text.toLowerCase()));
  }
}

export default createGetOptionsValueToSelectByTextList;
