const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((key, val) => {
    if (key === 1) map.set(val, 100);
  });
  return map;
};

export default updateUniqueItems;
