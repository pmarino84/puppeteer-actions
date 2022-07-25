import createEvaluate from "./createEvaluate";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createEvaluate', () => {
  let browserManager: BrowserManager, page: Page;

  beforeAll(async () => {
    browserManager = await bootstrapPuppeteer();
  });

  beforeEach(async () => {
    page = await browserManager.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    browserManager.close();
  });

  test('create the factory by function', () => {
    expect(typeof createEvaluate(() => { console.log('Hi'); })).toBe("function");
  });

  test('create the factory by string', () => {
    expect(typeof createEvaluate("() => { console.log('Hi'); }")).toBe("function");
  });
});
