// Loop routines

// For
for(let i = 10; i > 0; i--) {

  if(i === 5) {
    break;
  }

  if(i === 8) {
    continue;
  }

  console.log(i)
}

// While
let j = 54342453

while(j > 10) {
  console.log(j)

  j /= 50
}

// For ... of
let name = 'Tac'
let names = ['João', 'Paulo', 'Pedro']

// Walks for each character of name
for(let char of name) {
  console.log(char)
}

// Walks for each element of the array names
for(let char of names) {
  console.log(char)
}

// For in
let person = {
  name: 'John',
  age: 30,
  weigth: 88.6
}

for(let property in person){
  console.log(`Property: ${property} - Value: ${person[property]}`)
}

