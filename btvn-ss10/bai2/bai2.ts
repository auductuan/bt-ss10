class Student {
    constructor(public id: number, public age: number, public email: string) {}
}
const students: Student[] = [
    new Student(1, 18, "student1@gmail.com"),
    new Student(2, 19, "student2@gmail.com"),
];

students.forEach(student => console.log(`Student ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`));
