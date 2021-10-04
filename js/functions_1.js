// Function expression
// Function anonumous
const sum = function(number1, number2) { // In that case, "number1, number2" are parameters
  // Notice that total became a variable available in all code after this function call. That's dangerous
  total = number1 + number2

  // So always use let, var or const
  // let total = number1 + number2

  return total
}

// sum(2, 3) // In that case, "2, 3" are arguments

let number1 = 51
let number2 = 54

console.log(`The sum of ${number1} and ${number2} is ${sum(number1, number2)}`)

// Function hoisting
sayMyName()

function sayMyName() {
  console.log('Tac')
}
// Function hoisting don't works with function expressions 

// Arrow function
const sayHerName = (she) => {
  console.log(she)
}

sayHerName('Hmm')

// Callback Function
function sayHisName(he){
  he()
}

sayHisName(
  () => {
    console.log("I'm in a callback")
  }
)

// Constructor function
// It's a good practice naming constructor functions with upper letter first
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + 'is walking...'
  }
}

const tac = new Person("Tac")
const joao = new Person("João")
console.log(tac)