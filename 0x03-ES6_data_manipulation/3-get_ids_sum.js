const getStudentIdsSum = (listStudents) => {
  if (!(Array.isArray(listStudents))) {
    return 0;
  }

  const initialValue = 0;
  const out = listStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
  return out;
};

export default getStudentIdsSum;
