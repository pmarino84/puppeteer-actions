import createGetOptionsOfSelect from "./createGetOptionsOfSelect";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createGetOptionsOfSelect', () => {
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
    expect(typeof createGetOptionsOfSelect("selettore")).toBe("function");
  });
});
