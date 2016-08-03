var Animal = function () {
	Object.defineProperty(this, "type", {
		enumerable: true,
		writable: false,
		configurable: false,
		value: "Living Thing"
	});
};

var Horse = function (nLegs) {
	Object.defineProperty(this, "nLegs", {
		enumerable: true,
		// writable: false,
		configurable: false,
		set: function (value) { nLegs = value * 2; },
		get: function () { return nLegs; }
	});

	Object.defineProperty(this, "run", {
		enumerable: true,
		writable: false,
		configurable: false,
		value: function () {
			console.log("Horse is running...");
		}
	});
};

Horse.prototype = new Animal();

var pony = new Horse();

console.log("Pony has " + pony.nLegs + " legs.");
console.log("Assigning 5 to nLegs...");
pony.nLegs = 5;

console.log("Deleting nLegs...");
delete pony.nLegs;

console.log("Pony has " + pony.nLegs + " legs.");

console.log("For i in pony properties...")
for (var i in pony) {
	console.log(i);
}

console.log("Reult of getOwnPropertyNames...");
console.log(Object.getOwnPropertyNames(pony));


console.log("Reult of keys...");
console.log(Object.getOwnPropertyNames(pony));

pony.run();

console.log(Object.keys(pony));

console.log("Archiver Example:");

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
console.log("Archive Temperature get");
console.log(arc.temperature); // 'get!'

console.log("Setting Archive Temperature to 11 and then 13");
arc.temperature = 11;
arc.temperature = 13;

console.log("Getting Archive");
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]

