export const keep = (list, fn) => list.filter(fn);

export const discard = (list, fn) => list.filter((item) => !fn(item));
