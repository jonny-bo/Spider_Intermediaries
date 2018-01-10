const puppeteer = require('puppeteer');
const puppeteer_config = require('./puppeteer_config');

(async () => {
  const browser = await puppeteer.launch(puppeteer_config);

  const page = await browser.newPage();

  await page.goto('https://www.baidu.com/');
  
  const data = await page.evaluate((target) => {
    return document.getElementById(target).value;
  }, 'su');

  await browser.close();
})()