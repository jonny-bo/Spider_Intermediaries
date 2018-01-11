const hzArea = [
  { name: 'xiaoshan', cname: '萧山' },
  { name: 'binjiangb', cname: '滨江' },
  { name: 'xihu', cname: '西湖' },
  { name: 'yuhang', cname: '余杭' },
  { name: 'gongshu', cname: '拱墅' },
  { name: 'shangcheng', cname: '上城' },
  { name: 'fuyang', cname: '富阳' },
  { name: 'xiacheng', cname: '下城' },
  { name: 'jianggan', cname: '江干' },
];

const baseUrl = 'https://hz.zu.anjuke.com/fangyuan/{$name}/p{$page}-px3/';

const targetConfig = {
  baseItem: '#list-content>.zu-itemmod',
  data: {
    description: '.zu-info>h3>a',
    house_information: '.zu-info>p',
    house_address: '.zu-info>address.details-item',
    price: '.zu-side>p>strong',
  },
};

module.exports = {
  area: hzArea,
  templateUrl: baseUrl,
  targetObj: targetConfig,
};
