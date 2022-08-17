// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  console.log(this);
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    greet: function () {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
    logThis: function () {
      console.log(this);
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();
newStudent.logThis();

module.exports = student;
