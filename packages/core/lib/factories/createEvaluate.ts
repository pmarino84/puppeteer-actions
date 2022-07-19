import { EvaluateFn, Page, SerializableOrJSHandle } from "puppeteer";

/**
 * Create a function to call page.evaluate
 * @param fn - function to evaluate
 * @returns function that take Page and arguments to evaluate given function (fn) inside browser page
 */
export function createEvaluate<T = any>(fn: EvaluateFn<T>) {
  return (page: Page, ...args: SerializableOrJSHandle[]) => page.evaluate(fn, ...args);
}

export default createEvaluate;
