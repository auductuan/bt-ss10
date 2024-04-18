"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students = [
    new Student(1, 18, "student1@gmail.com"),
    new Student(2, 19, "student2@gmail.com"),
];
students.forEach(student => console.log(`Student ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`));
