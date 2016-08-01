/**
 * Factory
 */
let peopleFactory = {
	get: function (name, age) {
		let person = {};

		person.getName = function () {
			return name;
		};

		person.getAge = function () {
			return age;
		};

		return person;
	}
};

let tolgaByFactory = peopleFactory.get("tolga", "31");
let cagriByFactory = peopleFactory.get("cagri", "35");

console.log("Tolga is (created by factory) " + tolgaByFactory.getAge());
console.log("Cagri is (created by factory) " + cagriByFactory.getAge());


/**
 * Constructor
 */
let Person = function (name, age) {

	Person.prototype.getName = function () {
		return name;
	};

	Person.prototype.getAge = function () {
		return age;
	};

};


let tolga = new Person("tolga", 31);
let cagri = new Person("cagri", 35);

console.log("Tolga is " + tolga.getAge());
console.log("Cagri is " + cagri.getAge());