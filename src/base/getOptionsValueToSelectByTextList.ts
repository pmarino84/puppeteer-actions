import { Page } from "puppeteer";
import createGetOptionsValueToSelectByTextList from "../core/factories/createGetOptionsValueToSelectByTextList";

/**
 * Retrieve options value of the select. Filtered by textToMatchList.
 * @param page - Page to interact
 * @param selectSelector - Select element selector
 * @param textToMatchList - labels to match
 * @returns The options value of the select. Filtered by textToMatchList.
 */
export function getOptionsValueToSelectByTextList(page: Page, selectSelector: string, textToMatchList: string[]) {
  const run = createGetOptionsValueToSelectByTextList(selectSelector);
  return run(page, textToMatchList);
}

export default getOptionsValueToSelectByTextList;
