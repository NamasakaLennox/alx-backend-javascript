const cleanSet = (set, startString) => {
  const array = [...set];

  if (typeof startString !== 'string') return '';

  if (startString.length === 0) return '';

  const newArray = [];
  for (const elem of array) {
    if (elem && elem.indexOf(startString) === 0) {
      newArray.push(elem.replace(startString, ''));
    }
  }

  return newArray.join('-');
};

export default cleanSet;
