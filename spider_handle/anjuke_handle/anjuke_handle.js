// const deepCopy = require('../../utils/deepCopy');

async function anjukeHandle(page, option) {
  const pageData = await page.evaluate((opt) => {
    const itemSelector = opt.baseItem.toString();
    let data = {};
    const housingArr = document.querySelectorAll(itemSelector);
    const housingArrLength = housingArr.length;
    const kongArr = [];
    for (let i = 0; i < housingArrLength; i += 1) {
      const housingData = housingArr[i];
      for (const key in opt.data) {
        if (Object.prototype.hasOwnProperty.call(opt.data, key)) {
          data[key] = housingData.querySelector(opt.data[key]).innerText;
        }
      }
      kongArr.push(data);
      data = {};
    }
    return kongArr;
  }, option);
  return new Promise((resolve) => {
    resolve(pageData);
  });
}

module.exports = anjukeHandle;
