"use strict";
class Vehicle {
    constructor(modelName, productionYear, manufacturer) {
        this.modelName = modelName;
        this.productionYear = productionYear;
        this.manufacturer = manufacturer;
    }
}
const vehicle1 = new Vehicle("Mercedes Maybach S450", 2018, "Maybach");
const vehicle2 = new Vehicle("vision sport", 2023, "Honda");
console.log(vehicle1);
console.log(vehicle2);
