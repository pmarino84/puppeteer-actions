import createGetOptionsValueToSelectByTextList from "./createGetOptionsValueToSelectByTextList";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createGetOptionsValueToSelectByTextList', () => {
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

  test('create the factory', () => {
    expect(typeof createGetOptionsValueToSelectByTextList("selettore")).toBe("function");
  });
});
