"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
const department = new Department(1, "mtp", ["tuan", "tung", "truong"]);
department.describe();
