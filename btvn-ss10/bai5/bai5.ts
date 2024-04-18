class Department {
    constructor(public readonly id: number, private name: string, private employees: string[]) {}
    describe(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
const department = new Department(1, "mtp", ["tuan", "tung", "truong"]);
department.describe();
