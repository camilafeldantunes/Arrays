// Tirando nomes repetidos usando o que já foi aprendido no curso Alura

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];


const nomesSemRepeticao = nomes.filter((nome, i)=> nomes.indexOf(nome) === i);

console.log(nomesSemRepeticao);




