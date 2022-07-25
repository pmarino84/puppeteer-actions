import createWaitForHidden from "./createWaitForHidden";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createWaitForHidden', () => {
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
    expect(typeof createWaitForHidden("selettore")).toBe("function");
  });
});
