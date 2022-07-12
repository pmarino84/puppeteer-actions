import { Page } from "puppeteer";
import isNotReadonly from "./isNotReadonly";

/**
 * Execute given function if the element is not readonly
 * @param page - Page to interact
 * @param selector - Element selector
 * @param fn - Function to execute
 */
export async function ifNotReadonlyExecute(page: Page, selector: string, fn: () => Promise<void> | void) {
  if (await isNotReadonly(page, selector)) {
    await fn();
  }
}

export default ifNotReadonlyExecute;
