import { Page, WaitForSelectorOptions } from "puppeteer";
import createGetOptionsValueToSelectByTextList from "../GetOptionsValueToSelectByTextList/createGetOptionsValueToSelectByTextList";
import createWaitForSelectorAndSelect from "../WaitForSelectorAndSelect/createWaitForSelectorAndSelect";

/**
 * Create function to select given labels
 * @param selector - Select element selector
 * @param waitOptions - options for [page.waitForSelector](https://pptr.dev/api/puppeteer.page.waitforselector)
 * @returns function to select given labels
 */
export function createSelectByFindOptionsByTextList(selector: string, waitOptions?: WaitForSelectorOptions) {
  const getOptionsValueToSelectByTextList = createGetOptionsValueToSelectByTextList(selector);
  const waitForSelectorAndSelect = createWaitForSelectorAndSelect(selector, waitOptions);

  return async function selectByFindOptionsByTextList(page: Page, textToMatchList: string[], overrideWaitOptions?: WaitForSelectorOptions) {
    const values = await getOptionsValueToSelectByTextList(page, textToMatchList);

    if (!values.length || values.length !== textToMatchList.length) {
      throw new Error(`Failed to select. Options value not found`);
    }

    await waitForSelectorAndSelect(page, values, overrideWaitOptions);
  }
}

export default createSelectByFindOptionsByTextList;
