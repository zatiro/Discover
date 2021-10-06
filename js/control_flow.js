// Control flow

// If, Else
let temperature = 37.5
// Good practice
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

// Switch
let expression = 'a'

switch (expression) {
  case 'a':
    console.log('a')
    break;
  case 'a':
    console.log('b')
    break;

  default:
    console.log('default')
    break;
}

// Throw e Try/Catch

function sayMyName(name = ''){
  if(name === ''){
    // throw new Error("Nome é necessário")
    // OR
    throw 'Nome é necessário'
  }

  console.log('Depois do erro')
}

try {
  // This one will stop the excecution an go to catch
  sayMyName()
  // This won't run
  sayMyName('TAC')
  // This won't run
  sayMyName()
} catch(e) {
  console.log(e)
}

// 
sayMyName()

// This line will stop all script below becouse the above error
console.log('depois da função fora do try/catch')