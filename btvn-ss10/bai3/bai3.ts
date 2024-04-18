class Employee {
    constructor(public name: string, protected company: string, private phone: string) {}

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
const employee = new Employee("Thanh Tung", "Rikkei", "123-456");
employee.printInfo();
