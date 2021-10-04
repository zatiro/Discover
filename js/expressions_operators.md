# Expressions and Operators

## Operators

### Binary

```js
console.log(1 + 1) // Combine 2 elements
```

### Unary

```js
let number = 1
console.log(--number) // Operate in 1 element
console.log(typeof number) // Operate in 1 element

const person = {
  name: 'Tac',
  age: 21
}
delete person.age
```

### Ternary

```js
console.log(true ? 'alo' : 'tchau') // Operates 3 Expressions
```

## New

Used to create a new object

```js
let completeName = new String('Tiago')
completeName.surName = 'Cardoso'
console.log(completeName)
// String {'Tiago', surName: 'Cardoso'}

let age = new Number(21)
console.log(age)
// Number {21}

let date = new Date('2021-10-04')
console.log(date)
// Sun Oct 03 2021 21:00:00 GMT-0300 (Horário Padrão de Brasília)
```

## Comparison operators
==, !=, ===, !==, >, >=, <, <=

## Assignment operators
=, +=, -=, *=, /=, %=, **=

## Logical operators
&&, ||, !

## Falsy

When a value is consider as false in cases that a boolean is required

```js
false
0
-0
""
null
undefined
NaN
```

## Truthy

```js
true
{}      // Object
[]      // Array
1
-1
3.32
"0"     // String
"false" // String
Infinity
-Infinity
```