const Student =
require("../models/Student");

const getStudents =
async (req, res) => {

  const students =
  await Student.find();

  res.json(students);
};

const addStudent =
async (req, res) => {

  const student =
  await Student.create(req.body);

  res.status(201).json(student);
};

module.exports = {
  getStudents,
  addStudent
};
