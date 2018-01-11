const puppeteer = require('puppeteer');
const puppeteerConfig = require('../../puppeteer_config');

const deepCopy = require('../../utils/deepCopy');

// const MAX_PAGE = 50;

const { area, templateUrl, targetObj } = require('../../spider_config/anjuke_zufang/anjuke');

function search() {
  
}

async function spider(targetUrl) {
  const browser = await puppeteer.launch(puppeteerConfig);

  const page = await browser.newPage();

  await page.goto(targetUrl);

  search(page, targetObj);

  await page.waitFor(3000);

  await browser.close();
}

async function pageLoop() {
  for (let i = 0; i < 1; i += 1) {
    const { name } = area[i];
    const tmp = templateUrl.replace('{$name}', name);
    for (let j = 0; j < 2; j += 1) {
      const page = j;
      const targetUrl = tmp.replace('{$page}', page);
      await spider(targetUrl);
    }
  }
}

pageLoop();
