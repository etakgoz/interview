/**
 * Prototype Pattern
 */
let Person = function () {};

// Default value
Person.prototype.name = "No Name";
Person.prototype.age = 0;

Person.prototype.getName = function () {
	return this.name;
};

Person.prototype.getAge = function () {
	return this.age;
};

let tolga = new Person();

console.log("Tolga is called " + tolga.getName());
console.log("Tolga is " + tolga.getAge());
console.log("Tolga has own property (name): " +  tolga.hasOwnProperty("name"));
console.log("Tolga has name in: " +  ("name" in tolga));

// Shadows prototypal properties
tolga.name = "Tolga";
tolga.age = 31;

console.log("After defining properties...");
console.log("Tolga is called " + tolga.getName());
console.log("Tolga is " + tolga.getAge());
console.log("Tolga has own property (name): " +  tolga.hasOwnProperty("name"));
console.log("Tolga has name in: " +  ("name" in tolga));