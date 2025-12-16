const student={
    name: "sudip",
    batch: "csit",
    year:1,
    isBackendLearner: true
};
console.log("orignal:",student);

student.country="Nepal";
student.year=2;
delete student.isBackendLearner;
console.log("updated:",student);