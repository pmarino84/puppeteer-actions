import { EvaluateFn, Page, SerializableOrJSHandle, WaitForSelectorOptions } from "puppeteer";
import waitForSelectorAndRun from "./waitForSelectorAndRun";

export default function waitForSelectorAndRunEvaluated(page: Page, selector: string, options?: WaitForSelectorOptions) {
  const run = waitForSelectorAndRun(page, selector, options);
  return async <T = any>(fn: EvaluateFn<T>, ...args: SerializableOrJSHandle[]) => {
    const result = await run(
      (el) => page.evaluate<EvaluateFn<T>>(fn, el, ...args)
    );

    return result;
  };
}
