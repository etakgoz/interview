var Animal = function () {
	this.type = "Animal";
};

var Horse = function () {
	this.nLegs = 4;
};

Horse.prototype = new Animal();

var pony = new Horse();

console.log("res " + pony.propertyIsEnumerable("type"));

for (var i in pony) {
	console.log(i);
}