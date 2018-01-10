const puppeteer = require('puppeteer');
const puppeteer_config = require('../../puppeteer_config');

const MAX_PAGE = 50;

let { area, templateUrl } = require('../../spider_config/anjuke_zufang/anjuke');

async function spider(targetUrl) {
  
  const browser = await puppeteer.launch(puppeteer_config);

  const page = await browser.newPage();

  await page.goto(targetUrl);

  await page.waitFor(3000);

  await browser.close();

};

function page_loop(params) {
  for (let i = 0; i < 3; i++) {
    const name = area[i].name;
    let tmp = templateUrl.replace('{$name}', name);
    for (let j = 0; j < 3; j++) {
      const page = j;
      const targetUrl = tmp.replace('{$page}', page);
      spider(targetUrl);
      try {
        console.log('success');
      } catch (e) {
        console.log(e);
        continue;
      }
    }
  }
}

page_loop();