# Type conversion (typecasting) vs Type coersion

Changing from one data type to another

```js
console.log('9' + 5) 
// 95 - Concat string - Type coersion

console.log(Number('9') + 5) 
// 14 - Type conversion
```

# Manipulating Strings and Numbers

## Length

```js
let word = "Paralelepipedo"
console.log(word.length)
// 14

let number = 132465
console.log(String(number).length)
// 6
```

## Transformimg a number into another with 2 decimal places and comma instead of dot

```js
let number = 654.789132
console.log(number.toFixed(2).replace('.', ','))
// 654,79
```

## Upper and lower cases

```js
let word = "Programar é tudo de bom!"
console.log(word.toUpperCase())
// PROGRAMAR É TUDO DE BOM!
```

## Split a text that contain spaces into a new array which each word is a position in the array. Then, glue the array pieces in a unique text separeted by underline _

```js
let text = "I wanna live the love!"
let pieces = text.split(" ")
let textWithUnderscore = pieces.join("_")
console.log(textWithUnderscore)
// I_wanna_live_the_love!
```

## Search for the word "love"

```js
let text = "I wanna live!"
console.log(text.includes("love"))
// false

text = "I wanna live the love!"
console.log(text.includes("love"))
// true 
```

# Arrays

## Creating an array with constructor

```js 
let myArray1 = new Array('a', 'b', 'c')
let myArray2 = new Array(10) // Creates an array with 10 empty positions
```

## Counting elements in Array

```js
console.log([
  "a", 
  {type: "array"},
  function () { return "alo" },
].lenght)
// 3
```

## Transforming characteres into elements of an Array

```js
let word = "manipulation"
console.log(Array.from(word))
// (12) ['m', 'a', 'n', 'i', 'p', 'u', 'l', 'a', 't', 'i', 'o', 'n']
```

## Manipulating Arrays

```js
let techs = ["html", "css", "js"]

// Adding one item at the end
techs.push("nodejs")
// Adding one item at the beginning
techs.unshift("sql")
// Removing from end
techs.pop()
// Removing from beginning
techs.shift()

// Selecting some array elements
console.log(techs.slice(1, 3)) // Removes css and js
// Removing 1 or more items in any position of the array
techs.splice(1, 1) // Removes css
// Find the position of an element
let index = techs.indexOf('html')
// Remove that guy
techs.splice(index, 1)

console.log(techs)
```