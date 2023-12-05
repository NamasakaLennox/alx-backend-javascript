const getStudentsByLocation = (listStudents, city) => {
  if (!(Array.isArray(listStudents))) {
    return [];
  }

  const out = listStudents.filter((student) => student.location === city);
  return out;
};

export default getStudentsByLocation;
