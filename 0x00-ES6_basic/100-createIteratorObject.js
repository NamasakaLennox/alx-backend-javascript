export default function createIteratorObject(report) {
  const output = [];
  const employees = report.allEmployees;

  for (const key in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, key)) {
      output.push(...employees[key]);
    }
  }
  return output;
}
