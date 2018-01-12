const anjuke = require('./task/anjuke_spider/anjuke_spider');

switch (process.argv[2]) {
  case 'anjuke':
    anjuke();
    break;
  default:
    throw new Error('The task does not exist in the execution list');
}
