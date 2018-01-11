function deepCopy(obj) {
  let str;
  let newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    throw new Error('你所拷贝的不是一个对象');
  } else if (window.JSON) {
    str = JSON.stringify(obj);
    newobj = JSON.parse(str);
  } else {
    const keys = Object.keys(obj);
    const value = Object.values(obj);
    for (let i = 0; i < keys.length; i += 1) {
      const val = value[i];
      newobj[i] = typeof val[i] === 'object' ? deepCopy(val[i]) : val[i];
    }
  }
  return newobj;
}

module.exports = deepCopy;
