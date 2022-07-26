import createWaitForSelectorAndSelect from "./createWaitForSelectorAndSelect";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createWaitForSelectorAndSelect', () => {
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

  test('create the factory without options', () => {
    expect(typeof createWaitForSelectorAndSelect('selector')).toBe("function");
  });
});