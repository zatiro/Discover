// Praticando variáveis e tipos de dados

// Declaration
var studentName

// Assignment
studentName = "Tiago"

// Data type
console.log(typeof studentName)

// Declaration grouping
let age, isHuman

age = 21
isHuman = true

console.log(studentName, age, isHuman)

// Writing texts and variables
// Interpolation
console.log(`This ${studentName} is ${age} years old. And, is a Human? ${isHuman}`)
// String concat
console.log('This ' + studentName + ' is ' + age + ' years old. Ans, is a Human? ' + isHuman)

// Object
const person = {
  employeeName: 'John',
  age: 22,
  weight: 88.6,
  isAdmin: true
}
console.log(`${person.employeeName} is ${person.age} years old.`)

// Arrays
const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

// Accessing values in an Array
console.log(animals[1])
console.log(animals[2].name)
console.log(animals.length)
