const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];


//  O primeiro número é a posição que a gente quer acessar da lista mais externa (alunos(0) ou médias(1). E a segunda é a posição dentro do array dos alunos, que no caso é Juliana.

console.log(lista[0][1]);
console.log(`A média dessa aluna é: ${lista[1][1]}`);