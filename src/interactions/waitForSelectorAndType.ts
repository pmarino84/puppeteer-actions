import { Page, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRun from "../core/waitForSelectorAndRun";

export default async function waitForSelectorAndType(page: Page, selector: string, text: string, options?: { waitOptions: WaitForSelectorOptions; typeOptions: { delay: number; }; }): Promise<void> {
  await waitForSelectorAndRun(page, selector, options && options.waitOptions)(
    (el) => el.type(text, options && options.typeOptions)
  );
}
