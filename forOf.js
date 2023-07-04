// for of
const notas = [10, 8, 6.5, 2];

// Para cada elemento de notas executa o código que está ali dentro

// Para percorrer um array é mais fácil usar o for of do que o for

let soma = 0;

for(let elemento of notas){
    soma += elemento;
}

console.log(soma);