import createGetElementText from "./createGetElementText";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createGetElementText', () => {
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

  test('create the factory by string', () => {
    expect(typeof createGetElementText("selettore", "textContent")).toBe("function");
  });
});
