import { Page, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRunEvaluated from "../core/waitForSelectorAndRunEvaluated";

export default function waitForSelectorAndSelectEvaluated(page: Page, selector: string, values: string[], options?: WaitForSelectorOptions): Promise<string[]> {
  return waitForSelectorAndRunEvaluated(page, selector, options)(
    (el: HTMLSelectElement) => {
      const options = el.options;
      const selectOption = (val: string) => {
        for (let i = 0; i < options.length; i++) {
          const el = options[i];
          if (el.value === val) {
            el.selected = true;
            break;
          }
        }
      };

      values.forEach(val => selectOption(val));

      return Array.from(options).filter(option => option.selected).map(option => option.value);
    }
  );
}
