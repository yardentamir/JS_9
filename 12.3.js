(function () {
  "use strict";

  const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id: 13,
        name: "Houston",
        age: 21,
      },
    ],
  };

  const findPerson = (type, id) => {
    return school[type].filter((person) => person.id === id);
  };

  const assignStudent = (studentId, subject) => {
    const whoIsTheStudent = findPerson("students", studentId);
    // if the student is in the list
    if (whoIsTheStudent.length !== 0) {
      // checks for relevant Teacher that teaches this subject and capacity isn't full
      const relevantTeacher = school.teachers.filter((teacher) => {
        return (
          teacher.subjects.includes(subject) &&
          teacher.students.length < teacher.capacityLeft
        );
      });
      // save to a new array all the students that already assigned
      const arrOfAssignedStd = school.teachers
        .map((teacher) => teacher.students)
        .flat();
      // takes the first teacher that is available
      if (relevantTeacher.length !== 0) {
        if (!arrOfAssignedStd.includes(studentId)) {
          relevantTeacher[0].students.push(studentId);
        }
      } else {
        console.log("Sorry, no available teachers left”");
      }
    } else {
      console.log("Sorry, There is no student with this id");
    }
  };

  const assignTeachersSubject = (TeacherId, newSubject) => {
    const whoIsTheTeacher = findPerson("teachers", TeacherId);
    if (!whoIsTheTeacher[0].subjects.includes(newSubject)) {
      whoIsTheTeacher[0].subjects.push(newSubject);
    }
  };

  const assignNewStudent = (name, age) => {
    let lastStudentId = school.students[school.students.length - 1].id;
    const obj = {
      id: ++lastStudentId,
      name,
      age,
    };
    school.students.push(obj);
  };

  console.log(findPerson("students", 10));
  assignStudent(11, "physics");
  assignStudent(11, "ethics");
  assignStudent(12, "biology");
  assignTeachersSubject(2, "programming");
  assignTeachersSubject(2, "programming");
  assignStudent(13, "programming");
  assignNewStudent("yarden", 27);
  console.log(school.teachers);
  console.log(school.students);
})();
