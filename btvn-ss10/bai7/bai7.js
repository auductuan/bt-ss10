"use strict";
class Circle {
    constructor(_radius) {
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this._radius;
    }
}
const circle = new Circle(5);
console.log("Initial Radius:", circle.radius);
console.log("Perimeter:", circle.calculatePerimeter());
console.log("Area:", circle.calculateArea());
circle.radius = 7;
console.log("\nUpdated Radius:", circle.radius);
console.log("Updated Perimeter:", circle.calculatePerimeter());
console.log("Updated Area:", circle.calculateArea());
