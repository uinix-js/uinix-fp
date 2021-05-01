export {curry};

const curry = (f, arity = f.length, ...args) => {
  return arity <= args.length
    ? f(...args)
    : curry.bind(null, f, arity, ...args);
};
