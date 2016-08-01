# Tricky Javascript Features

## Constructor Return Values

```javascript
x = 1;
function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x); // returns 2 and foo is a bar object
```

"As you can see, the first four invocations return the constructor instantiation to the calling context. But, when you start returning explicit, complex objects and arrays in a constructor function, you completely override the reference that is returned to the calling context."

http://www.bennadel.com/blog/2522-providing-a-return-value-in-a-javascript-constructor.htm

## Named functions

```javascript
var foo = function bar() {};
alert(typeof bar); // returns undefined

function bar() {};
alert(typeof bar); // returns "function"
```

## Arguments can be changed from the arguments array

```javascript
function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1); // alers 2
```

## Can not delete function properties --> but still messes up

```javascript
function foo(a) {
    alert(a);
}

console.log(foo.length); // 1
delete foo.length;
console.log(foo.length); // 0
```