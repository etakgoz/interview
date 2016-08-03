# Object Methods

## for var in object

Lists enumarable properties of an object included the inherited ones. Check with hasOwnProperty required.

Note: for var of collection is used for collections. and iterators over values not keys

## Object.keys()

Lists enumarable properties of an object excluding the inherited ones.

Note: not inherited via property chain. Must be called as Object.keys()

## Object.getOwnPropertyNames()

Returns both enumarable and non-inemruable own property names

Note: not inherited via property chain. Must be called as Object.getOwnPropertyNames()

Useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

## Object.getPrototoypeOf

Returns the prototype of the given object

## Object.propertyIsEnumerable

Every object has a propertyIsEnumerable method. This method can determine whether the specified property in an object can be enumerated by a for...in loop, with the exception of properties inherited through the prototype chain. If the object does not have the specified property, this method returns false.

Important: Only returns true if not inherited and enumarable own property

```javascript
var a = ['is enumerable'];

a.propertyIsEnumerable(0);          // returns true
a.propertyIsEnumerable('length');   // returns false

Math.propertyIsEnumerable('random');   // returns false
this.propertyIsEnumerable('Math');     // returns false
```
## Object.defineProperty

Object.defineProperty(obj, prop, descriptor)

```javascript
// using __proto__
var obj = {};
Object.defineProperty(obj, 'key', {
  __proto__: null, // no inherited properties
  value: 'static'  // not enumerable
                   // not configurable
                   // not writable
                   // as defaults
});

// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});
```

```javascript
var o = {}; // Creates a new object

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { return bValue; },
  set: function(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue, unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get: function() { return 0xdeadbeef; }
});
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

Use Object.defineProperties for multiple definition properties.

Use Object.getOwnPropertyDescriptor(obj, prop) to get the property description.

## Object.freeze vs Object.seal

Object.freeze makes the object immutable prevent value changes and property modifications. (Yet it is not deep)

The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

## Object.is Polyfill

```javascript
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## Definin getters
```javascript
var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Will return "test".
```

## Defining setters
```javascript
var o = {
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}
```


## Object.assign

## Object.create



