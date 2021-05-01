export {isPlainObject};

// Based on https://github.com/sindresorhus/is-plain-obj
const isPlainObject = (x) => {
  if (Object.prototype.toString.call(x) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(x);
  return prototype === null || prototype === Object.prototype;
};
