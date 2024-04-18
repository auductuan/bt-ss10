class Vehicle {
    constructor(public name: string, protected readonly year: number, private company: string, readonly id: string) {
    }
    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
        console.log("ID:", this.id);
    }
}
const vehicle = new Vehicle("Mercedes Maybach S450", 2018, "maybach", "A123");
vehicle.printInfo();
