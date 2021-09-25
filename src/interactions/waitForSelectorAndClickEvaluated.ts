import { Page, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRunEvaluated from "../core/waitForSelectorAndRunEvaluated";

export default function waitForSelectorAndClickEvaluated(page: Page, selector: string, options?: WaitForSelectorOptions) {
  return waitForSelectorAndRunEvaluated(page, selector, options)(
    (el) => el.click()
  );
}
