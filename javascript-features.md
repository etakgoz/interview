# Javascript Features

## Closure

Closing of a state. Saved scope and program code.

Two main uses. Parametrized functions.

```javascript
let makeAdder = function (value) {
	return function (input) {
		input + value;
	};
};

let adder5 = makeAdder(5);
```

And private variables:

```javascript
let x = (function () {
	let privateMember = 5;
	return {
		getPrivate () {
			return privateMember;
		}
	}
})();
```

## instanceof Operator

The instanceof operator tests presence of constructor.prototype in object's prototype chain.

```javascript
// defining constructors
function C(){}
function D(){}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C;

D.prototype = new C(); // use inheritance
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true


var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, same case as above

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false
```

Note that if the value of an instanceof test can change based on changes to the prototype property of constructors, it cannot be changed by changing an object prototype, because changing an object prototype is not possible in standard ECMAScript. It is however possible using the non-standard __proto__ pseudo-property.


## delete Operator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

Unlike what common belief suggests, the delete operator has nothing to do with directly freeing memory (it only does indirectly via breaking references. See the memory management page for more details).

```javascript
x = 42;         // creates the property x on the global object
var y = 43;     // creates the property y on the global object, and marks it as non-configurable
myobj = {
  h: 4,
  k: 5
};

// x is a property of the global object and can be deleted
delete x;       // returns true

// y is not configurable, so it cannot be deleted
delete y;       // returns false

// delete doesn't affect certain predefined properties
delete Math.PI; // returns false

// user-defined properties can be deleted
delete myobj.h; // returns true

// myobj is a property of the global object, not a variable,
// so it can be deleted
delete myobj;   // returns true

function f() {
  var z = 44;

  // delete doesn't affect local variable names
  delete z;     // returns false
}
```