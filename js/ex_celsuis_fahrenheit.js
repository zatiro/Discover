/**
 * Exercises
 * 
 * Celsius and Fahrenheit
 */

let toScale = 'Celsius'
let degrees = 50

function transformDegreesTo(degrees, scale) {
  let degreesTransformed

  switch (scale) {
    case 'Celsius':
      degreesTransformed = (degrees - 32) * 5 / 9
      break;
    case 'Fahrenheit':
      degreesTransformed = degrees * 9 / 5 + 32
      break;
  
    default:
      throw new Error('Invalid scale input.')
      break;
  }

  console.log(degreesTransformed.toFixed(3) + ' ' + scale)
}

try{
  transformDegreesTo(degrees, toScale)
  transformDegreesTo(10, 'Fahrenheit')
  transformDegreesTo(10, 'erro')
} catch(exception) {
  console.log(exception)
}
