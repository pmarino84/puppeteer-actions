# puppeteer-actions

`puppeteer-actions` is a collection of functions to help us in the creation of scraper, written with [Typescript](https://www.typescriptlang.org/) and built on top of [Puppeter](https://pptr.dev/).

I create scrapers in my daily job. Day by day I created functions to help me to write the scraper as fast as possible and more stable.
And now I decided to make it usable to everyone.

I hope this library help you like it help me.

## Structure of the library

This collections is made up of these parts:

* core: this part contains the more flexible functions
* base: this part contains the simplest functions we can use and most used, built on top of the functions within the core part

### Core

In this folder you can find the functions used to create other functions.

Why do I need functions to creat functions?
In my daily work i create web scrapers. And I see that i sometimes use, the same function with the same selector on more than one page.
So i decided to create factories the core folder of this library to create the functions that we can use on one or more page.
This has made the `puppeteer-actions` library more flexible.

For example, if we can retrieve data from an e-commerce product page, we can:

```js
import createGetElementText from "puppeteer-actions/core";

const getElementText = createGetElementText('#price');

const produtcPages = ['product 1 page url', 'product 2 page url', 'product 3 page url'];

function* getProductPageUrl(urls) {
  if (urls.length) {
    const url = urls.shift();
    yield url;
  }
}

const productPrices = [];
for await (const url of getProductPageUrl(productPages)) {
  // don't use await inside normal for loop
  await page.goto(url);
  const price = await getElememtText(page);
  productPrices.push(price);
}
```

### Base

In this folder you can find the common useful functions for working with puppeteer. Normally these functions are used.
I created these functions with the help of the factories inside the core folder.
