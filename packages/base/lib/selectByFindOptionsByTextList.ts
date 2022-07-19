import { Page, WaitForSelectorOptions } from "puppeteer";
import { createSelectByFindOptionsByTextList } from "@puppeteer-actions/core";

/**
 * Select given labels by searching their values in the options list of the interested select
 * @param page - Page to interact
 * @param selector - Element selector
 * @param textToMatchList - Labels to match
 * @param waitOptions - Options for page.waitForSelector
 */
export async function selectByFindOptionsByTextList(page: Page, selector: string, textToMatchList: string[], waitOptions?: WaitForSelectorOptions) {
  const run = createSelectByFindOptionsByTextList(selector, waitOptions);
  await run(page, textToMatchList);
}

export default selectByFindOptionsByTextList;
