import { Page } from "puppeteer";
import createWaitForTimeout from "../core/factories/createWaitForTimeout";

/**
 * Wait for given milliseconds
 * @param page - Page to interact
 * @param milliseconds - Milliseconds to wait
 */
export function waitForTimeout(page: Page, milliseconds: number) {
  const run = createWaitForTimeout(milliseconds);
  return run(page);
}

export default waitForTimeout;
