/**
 * Constructor
 */
let Person = function (name, age) {

	this.getName = function () {
		return name;
	};

	this.getAge = function () {
		return age;
	};

};


let tolga = new Person("tolga", 31);
let cagri = new Person("cagri", 35);

console.log("Tolga is " + tolga.getAge());
console.log("Cagri is " + cagri.getAge());