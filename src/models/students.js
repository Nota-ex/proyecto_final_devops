let students = [];

module.exports = {
  getAll: () => students,
  add: (student) => {
    students.push(student);
    return student;
  }
};