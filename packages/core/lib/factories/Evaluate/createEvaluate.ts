import { EvaluateFunc, Page } from "puppeteer";

/**
 * Create a function to call page.evaluate
 * @param fn - function to evaluate
 * @returns function that take Page and arguments to evaluate given function (fn) inside browser page
 */
export function createEvaluate<Params extends unknown[], Func extends EvaluateFunc<Params[]> = EvaluateFunc<Params[]>>(fn: Func | string) {
  return (page: Page, ...args: Params[]) => page.evaluate(fn, ...args);
}

export default createEvaluate;
