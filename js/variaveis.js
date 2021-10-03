// Variáveis

/**
 * São nomes simbólicos para receber algum valor
 * Atalhos de código
 * Identificadores
 * 3 palavras reservadas para criar uma variável
 *  - var
 *  - let
 *  - const
 */

// var
// var clima = "Quente"
// clima = "Frio"

// console.log("var")
// console.log(clima)

//let
// let clima = "Quente"
// clima = "Frio"

// console.log("let")
// console.log(clima)

// const
// const clima = "Quente"
// clima = "Frio" // Não funciona

// console.log("const")
// console.log(clima)

/**
 * O JS é uma linguagem fracamente tipada e dinâmica
 *  - Variáveis não precisam ter um tipo previamente definido
 *  - Podemos mudar o conteúdo da variável
 */

let clima = ""
clima = true

console.log("typeof")
console.log(typeof clima) // boolean

// Códigos mais modernos em JS utilizam mais o let e const

/**
 * Scope
 *  - Escopo determina a visibilidade de alguma variável no JS
 */

// Block statement
{

}

// var
// var é global e poderá funcionar fora de um escopo de bloco
// Por isso, ao declarar uma var em um escopo, ele faz o hoising (elevação)
console.log('Existe x antes do bloco?', x)

{
  var x = 0
}

// Resposta: Uncaught error: x is not defined

// Na compilação, o hoising faz isso virar isso

var x
console.log('Existe x antes do bloco?', x)

{
  x = 0
}

// Resposta: undefined

console.log(x) // 0

// Já const e let são locais e funcionam só no escopo onde foram criados

{
  let y = 1
  console.log('Existe y', y) // 1
}

console.log('Existe y depois do bloco?', y) // Uncaught ReferenceError: y is not defined

let y = 0
{
  let y = 1
  console.log('Existe y', y) // 1
}

console.log('Existe y depois do bloco?', y) // 0

let y = 0
{
  y = 1
  console.log('Existe y', y) // 1
}

console.log('Existe y depois do bloco?', y) // 1

// Pode-se criar uma constante com o mesmo nome em outro escopo
const z = true
{
  {
    {
      const z = false
      console.log(z)
    }
  }
}

/** Nomenclatura de variáveis
 * JS é case-sensitive
 * JS aceita a cadeia de caracteres Unicode (pode colocar áspas, acentuações)
 * 
 * Posso:
 *  - Iniciar com esses caracteres especiais: $ _
 *  - Iniciar com letras
 *  - Colocar acentos
 *  - Letras maiúsculas e minúsculas fazem diferença
 * 
 * Não posso:
 *  - Iniciar com números
 *  - Colocar espaços vazios no nome
 * 
 * Ideal
 *  - Criar nomes que fazem sentido
 *  - Que explique o que a variável é ou faz
 *  - camelCase
 *  - snake_case
 *  - Escrever em inglês
 */