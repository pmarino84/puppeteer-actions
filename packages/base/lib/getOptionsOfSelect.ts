import { Page } from "puppeteer";
import { createGetOptionsOfSelect, SelectOptionInfo } from "@puppeteer-actions/core";

/**
 * Retrieve options of the select, label and value for every option
 * @param page - Page to interact
 * @param selectSelector - Select element selector
 * @returns Options (label and value) fo select
 */
export function getOptionsOfSelect(page: Page, selectSelector: string): Promise<SelectOptionInfo[]> {
  const run = createGetOptionsOfSelect(selectSelector);
  return run(page);
}

export default getOptionsOfSelect;
