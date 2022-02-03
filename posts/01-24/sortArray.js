

// Strings
let nomes = [ "João", "Maria", "Alice", "Carlos"]
nomes.sort()
console.log(nomes)

//Output
//["Alice", "Carlos", "João", "Maria"]


//Números
let pontuacao = [ 75, 22, 100, 38, 97]
pontuacao.sort((a,b) => { return a - b})
console.log(pontuacao)

//Output
//[22, 38, 75, 97, 100]

