// Tipos de dados

/**
 * Strings
 */

console.log("'Tac'")

/**
 * A crase permite:
 *  - Aspas simples e duplas
 *  - Multi linha
 *  - Expressões (Interpolação)
 * */
console.log(`
  "
  '
  Tac ${13 + 13}
  '
  "
  `)

/**
 * Numbers
 * 
 * Inteiros
 * Reais
 * NaN - Not a Number
 * Infinity
 */

/**
 * Boolean
 * 
 * True
 * False
 */

/**
 * undefinded
 *  - Indefinido
 */

/**
 * null
 *  - nulo
 *  - objeto que não possui nada dentro
 *  - diferente de indefinido
 */

/**
 * Object
 *  - Objeto
 *  - Propriedades / Atributos
 *  - Funcionalidades / Métodos
 */
console.log({
  name: "TAC",
  idade: "21",
  andar: function(){
    console.log('andar')
  }
})

/**
 * Array
 *  - Vetores
 *  - Lista
 *  - Agrupamento de dado
 */
console.log([
  "Tac", 
  21
])