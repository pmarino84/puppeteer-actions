import { Page, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRun from "../core/waitForSelectorAndRun";

export default function waitForSelectorAndSelect(page: Page, selector: string, values: string[], options?: WaitForSelectorOptions): Promise<string[]> {
  return waitForSelectorAndRun(page, selector, options)(
    (el) => el.select(...values)
  );
}
