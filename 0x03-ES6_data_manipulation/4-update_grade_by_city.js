const updateStudentGradeByCity = (listStudents, city, newGrades) => {
  const out = listStudents.filter((student) => student.location === city).map((data) => {
    const newGrade = newGrades.filter((grade) => grade.studentId === data.id);
    const student = data;
    if (newGrade.length === 1) student.grade = newGrade[0].grade;
    else student.grade = 'N/A';
    return student;
  });

  return out;
};

export default updateStudentGradeByCity;
