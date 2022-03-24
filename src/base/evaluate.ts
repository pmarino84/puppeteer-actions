import { EvaluateFn, Page, SerializableOrJSHandle } from "puppeteer";
import createEvaluate from "../core/factories/createEvaluate";

/**
 * Evaluate given function inside browser context
 * @param page - Page to interact
 * @param fn - Function to evaluate
 * @param args - Argumenst for the function (optional)
 * @returns the result of fn
 */
export function evaluate<T = any>(page: Page, fn: EvaluateFn<T>, ...args: SerializableOrJSHandle[]) {
  const run = createEvaluate(fn);
  return run(page, ...args);
}

export default evaluate;
