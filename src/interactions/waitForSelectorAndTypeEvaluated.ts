import { Page, WaitForSelectorOptions } from "puppeteer";
import { waitForSelectorAndRunEvaluated } from "../core";

export default function waitForSelectorAndTypeEvaluated(page: Page, selector: string, text: string, options?: WaitForSelectorOptions) {
  return waitForSelectorAndRunEvaluated(page, selector, options)(
    (el) => {
      el.value = text;
    }
  );
}
