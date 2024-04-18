"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
        console.log("ID:", this.id);
    }
}
const vehicle = new Vehicle("Mercedes Maybach S450", 2018, "maybach", "A123");
vehicle.printInfo();
