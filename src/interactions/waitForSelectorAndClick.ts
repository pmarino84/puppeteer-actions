import { ClickOptions, Page, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRun from "../core/waitForSelectorAndRun";

export default async function waitForSelectorAndClick(page: Page, selector: string, options?: { waitOptions: WaitForSelectorOptions; clickOptions: ClickOptions; }): Promise<void> {
  await waitForSelectorAndRun(page, selector, options && options.waitOptions)(
    (el) => el.click(options && options.clickOptions)
  );
}
