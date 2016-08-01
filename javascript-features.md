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

## Delete Operator

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