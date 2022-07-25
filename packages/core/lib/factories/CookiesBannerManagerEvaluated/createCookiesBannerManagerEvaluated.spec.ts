import createCookiesBannerManagerEvaluated from "./createCookiesBannerManagerEvaluated";
import { bootstrapPuppeteer, BrowserManager } from "../../../utils/test/puppeteer";
import { Page } from "puppeteer";

describe('createCookiesBannerManagerEvaluated', () => {
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
    expect(typeof createCookiesBannerManagerEvaluated('banner selector', 'accept button selector', 'decline button selector')).toBe("function");
  });

  test('create the banner manager without options', () => {
    const bannerManagerFactory = createCookiesBannerManagerEvaluated('banner selector', 'accept button selector', 'decline button selector');
    expect(bannerManagerFactory(page)).toMatchObject(expect.objectContaining({
      accept: expect.any(Function),
      decline: expect.any(Function)
    }));
  });
});