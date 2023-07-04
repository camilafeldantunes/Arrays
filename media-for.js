const notas = [10, 8, 6.5, 2];

let soma = 0;


for(let i = 0; i < notas.length; i++){ 
    soma = soma + notas[i]; 
}
const media = soma / notas.length;
console.log(`A média das notas é: ${media}`);