const getListStudentIds = (listStudents) => {
  if (!(Array.isArray(listStudents))) {
    return [];
  }

  const out = listStudents.map((student) => student.id);
  return out;
};

export default getListStudentIds;
