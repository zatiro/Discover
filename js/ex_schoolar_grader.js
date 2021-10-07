/**
 * Exercises
 * 
 * Schoolar grader
 */

// Input
let numericGrade = -1

function isValidGrade(numericGrade) {
  let isValidGrade = (numericGrade <= 100 && numericGrade >= 0)
  
  if(!isValidGrade) {
    throw 'Invalid grade input.'
  }
}

function convertNumericGradeToCharacter(numericGrade) {
  let characterGrade

  if(numericGrade >= 90){
    characterGrade = 'A'
  } else if(numericGrade < 90 && numericGrade >= 80) {
    characterGrade = 'B'
  } else if(numericGrade < 80 && numericGrade >= 70) {
    characterGrade = 'C'
  } else if(numericGrade < 70 && numericGrade >= 60) {
    characterGrade = 'D'
  } else {
    characterGrade = 'F'
  }

  console.log(characterGrade)
  return characterGrade
}

try {
  isValidGrade(numericGrade)

  convertNumericGradeToCharacter(numericGrade)
  
} catch(exception) {
  console.log(exception)
}