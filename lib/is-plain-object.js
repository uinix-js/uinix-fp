export { isPlainObject };

const isObject = (x) => Object.prototype.toString.call(x) === '[object Object]';

// based on <https://github.com/jonschlinkert/is-plain-object>
const isPlainObject = (x) => {
  if (isObject(x) === false) {
    return false;
  }

  // has modified constructor
  if (x.constructor === undefined) {
    return true;
  }

  // constructor does not have an Object-specific method
  if (x.constructor.prototype.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }
  return true;
};
