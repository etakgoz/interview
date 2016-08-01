/* https://github.com/h5bp/Front-end-Developer-Interview-Questions */

/* http://www.frontendjournal.com/most-common-technical-interview-question-for-frontend-developers/ */

/* https://medium.com/javascript-scene/how-to-build-a-high-velocity-development-team-4b2360d34021#.j8vbwkfor */


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

let tolga = peopleFactory.get("tolga", "31");
let cagri = peopleFactory.get("cagri", "35");

console.log("Tolga is (created by factory) " + tolga.getAge());
console.log("Cagri is (created by factory) " + cagri.getAge());