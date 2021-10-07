/**
 * Exercises
 * 
 * Family expenses
 */

// Input
let familyFinances = {
  revenues: [1000, 1000, 3500],
  expenses: [0.259, 10000],
}

function sumArrayNumbers(array) {
  let total = 0

  for(let number of array){
    total += number
  }

  return total
}

function familyBalance(finances) {
  let totalRevenue = sumArrayNumbers(finances.revenues)
  let totalExpense = sumArrayNumbers(finances.expenses)
  let balance = totalRevenue - totalExpense

  console.log(`The family is ${(balance >= 0 ? 'positive!' : 'negative...' )} \nBalance: US$ ${balance.toFixed(2)}`)
}

familyBalance(familyFinances)