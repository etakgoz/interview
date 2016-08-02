# Javascript Types

# String

## String Literals !== String Objects

"hello" === new String("hello") // returns false
"hello" == new String("hello") // returns true

## Use indexOf for searching, lastIndexOf for last occurrence

```javascript
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
	count++;
	pos = str.indexOf('e', pos + 1);
}

console.log(count);
```

## Regex operations

1. String.prototype.match(): The match() method retrieves the matches when matching a string against a regular expression.
2. String.prototype.replace(): The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
3. String.prototype.search(): The search() method executes a search for a match between a regular expression and this String object. (Similar to indexOf)


The flag /g of JavaScript’s regular expressions

http://www.2ality.com/2013/08/regexp-g.html

## String.prototype.split()

The split() method splits a String object into an array of strings by separating the string into substrings. Very useful in solving problems in functional way.

```javascript
// Reversing
var str = "Galatasaray";
str = str.split('').reverse().join('');

// Replacing
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}

```

## String.prototype.valueOf()

Returns primitive value

## String.prototype.substring()

str.substring(indexStart[, indexEnd])

The substring() method returns a subset of a string between one index and another, or through the end of the string.

```javascript
// Displays 'illa' the last 4 characters
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

str.substr ---> can take negative numbers as start index

## String.prototype.slice()

```javascript
var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2); // OUTPUT: morning is upon u

var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
```javascript

