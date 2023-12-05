const cleanSet = (set, startString) => {
  const array = [...set];

  if (startString === '') return '';

  const newArray = [];
  for (const elem of array) {
    if (elem.startsWith(startString)) {
      newArray.push(elem.replace(startString, ''));
    }
  }

  return newArray.join('-');
};

export default cleanSet;
