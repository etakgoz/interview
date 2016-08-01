Interview Preparations
======================

# OOP

1. Note basic principles and learn SOLID solid
2. Composition over inheritance
3. Class hierarchy can be brittle and hard to modify

# Javascript

1. Review Prototypal Inheritance vs Classicial Inheritance
2. Review function arugments, name, etc
3. Check variable/function hoisting
4. Review promises, including finally, catch
5. Review try, catch
6. Review slice and splice
7. Understand ES6 class syntax
8. Do some exercies at Hacker Rank
9. Basic module writing with require
10. instanceof, x in arr,
11. Object.assign, Object.create, Object.keys
12. querySelectorAll, event delegation/bubbling
13. Review map, reduce*
14. typecast in operations
15. call, apply
16. delete operator (foo.length?)
17. Fastest way to create nodes
18. Fastest way to attache events?
19. String methods: splice, substring methods
20. Note down the functon properties: name, length, arguments
21. Review JS module loading
22. Streams and when to use them?
23. Testing Javascript Course on Udacity
24. List different usage of clousures: other than privates

## Small Projects

1. Complete binary search tree
2. Publisher observer pattern
3. Hackerrank questions

# Rendering Performance

Read the articles below and take note of critical path:

https://developers.google.com/web/fundamentals/performance/rendering/
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction


# Algorithms

1. Take notes on the chapters you have read
2. Implement bubble sort, quick sort, merge sort
3. Implement binary search
4. Implement binary search tree

# CSS

1. Flexbox
2. nth of type
3. Do the questons on:

http://h5bp.github.io/Front-end-Developer-Interview-Questions/

# Tricky Javascript Features

1. Constructor Return Values

x = 1;
function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x); // returns 2 and foo is a bar object

"As you can see, the first four invocations return the constructor instantiation to the calling context. But, when you start returning explicit, complex objects and arrays in a constructor function, you completely override the reference that is returned to the calling context."

http://www.bennadel.com/blog/2522-providing-a-return-value-in-a-javascript-constructor.htm

2. Named functions

var foo = function bar() {};
alert(typeof bar); // returns undefined

function bar() {};
alert(typeof bar); // returns "function"

3. Arguments can be changed from the arguments array

function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1); // alers 2

4. Can not delete function properties --> but still messes up

function foo(a) {
    alert(a);
}

console.log(foo.length); // 1
delete foo.length;
console.log(foo.length); // 0

-----

html:

keygen
bdo
mark --> search highlighting
scoped

when does html trigger requests download to get resources..