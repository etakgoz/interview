/**
 * Dynamical Prototype Pattern
 */
let Person = function (name, age) {
	this.name = name;
	this.age = age;

	if (typeof Person.prototype.getName !== "function") {
		Person.prototype.getName = function () {
			return this.name;
		};

		Person.prototype.getAge = function () {
			return this.age;
		};
	}

};

let tolga = new Person("tolga", "31");
let cagri = new Person("cagri", "35");

console.log("Tolga is " + tolga.getAge());
console.log("Cagri is " + cagri.getAge());

console.log("Does Tolga and Cagri have some constructor? " + (tolga.constructor === cagri.constructor ? "Yes" : "No" ));
console.log("Does Tolga and Cagri share some getName " + (tolga.getName === cagri.getName ? "Yes" : "No" ));