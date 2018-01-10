const hz_area = [
  { "name" : 'xiaoshan', "cname" : '萧山' },
  { "name" : 'binjiangb', "cname" : '滨江' },
  { "name" : 'xihu', "cname" : '西湖' },
  { "name" : 'yuhang', "cname" : '余杭' },
  { "name" : 'gongshu', "cname" : '拱墅' },
  { "name" : 'shangcheng', "cname" : '上城' },
  { "name" :  'fuyang', "cname" : '富阳' },
  { "name" :  'xiacheng', "cname" : '下城' },
  { "name" :  'jianggan', "cname" : '江干' },
];

const base_url = 'https://hz.zu.anjuke.com/fangyuan/{$name}/p{$page}-px3/'

module.exports = {
  area: hz_area,
  templateUrl: base_url, 
};