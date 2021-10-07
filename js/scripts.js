/**
 * Exercises
 * 
 * Book finder
 */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaky e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal so século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
]

const totalCategorys = booksByCategory.length
console.log(`We have ${totalCategorys} categorys.`)

for(let category of booksByCategory) {
  console.log(`We have ${category.books.length} books of ${category.category}!`)
}

let authors = {}

for(let category of booksByCategory) {
  for(let book of category.books) {
    authors[book.author] = 1
  }
}
const totalAuthors = Object.keys(authors).length
console.log(`We have ${totalAuthors} authors.`)

function booksOf(author) {
  let books = []

  for(let category of booksByCategory) {
    for(let book of category.books) {
      // Is the book of the searched author and it is not in the list yet
      if(book.author === author && books.indexOf(book.title) === -1) {
        books.push(book.title)
      }
    }
  }

  console.log(`${author} books are "${books.join('", "')}"`)
}

booksOf('Augusto Cury')