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
    return school[type].find((person) => person.id === id);
  };

  const assignStudent = (studentId, subject) => {
    const whoIsTheStudent = findPerson("students", studentId);
    // if the student is in the list
    if (whoIsTheStudent == undefined) {
      console.log("Sorry, There is no student with this id");
      return;
    }
    // checks for relevant Teacher that teaches this subject and capacity isn't full
    const relevantTeacher = school.teachers.find((teacher) => {
      return (
        teacher.subjects.includes(subject) && teacher.capacityLeft !== 0 //teacher.students.length < teacher.capacityLeft
      );
    });
    if (relevantTeacher == undefined) {
      console.log("Sorry, no available teachers left");
      return;
    }
    // save to a new array all the students that already assigned
    const arrOfAssignedStd = school.teachers
      .map((teacher) => teacher.students)
      .flat();
    // takes the first teacher that is available

    if (!arrOfAssignedStd.includes(studentId)) {
      relevantTeacher.students.push(studentId);
      relevantTeacher.capacityLeft--;
    }
  };

  const assignTeachersSubject = (TeacherId, newSubject) => {
    const whoIsTheTeacher = findPerson("teachers", TeacherId);
    if (!whoIsTheTeacher.subjects.includes(newSubject)) {
      whoIsTheTeacher.subjects.push(newSubject);
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
  assignStudent(13, "biology");
  assignStudent(16, "biology");
  assignStudent(10, "biology");
  assignTeachersSubject(2, "programming");
  assignTeachersSubject(2, "programming");
  assignNewStudent("yarden", 27);
  assignNewStudent("tal", 28);
  console.log(school.teachers);
  console.log(school.students);
})();
