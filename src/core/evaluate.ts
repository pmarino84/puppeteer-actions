import { EvaluateFn, Page, SerializableOrJSHandle } from "puppeteer";

export default function evaluate<T = any>(fn: EvaluateFn<T>) {
  return (page: Page, ...args: SerializableOrJSHandle[]) => page.evaluate(fn, ...args);
}

export const evaluateImmediatelly = <T = any>(page: Page, fn: EvaluateFn<T>, ...args: SerializableOrJSHandle[]) => evaluate<T>(fn)(page, ...args);
