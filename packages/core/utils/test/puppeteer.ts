import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

function createBrowserContext() {
  return puppeteer.launch({ headless: true });
}

function createIncognitoContext(browser: Browser) {
  return browser.createIncognitoBrowserContext();
}

function createPage(context: BrowserContext) {
  return context.newPage();
}

export type BrowserManager = {
  browser: Browser;
  newPage: () => Promise<Page>;
  close: () => Promise<void>;
}

export async function bootstrapPuppeteer(): Promise<BrowserManager> {
  const browser = await createBrowserContext();

  return {
    browser,
    newPage: async () => {
      const incognitoContext = await createIncognitoContext(browser);
      return createPage(incognitoContext);
    },
    close: () => browser.close()
  }
}
