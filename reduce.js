const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notas){
   const somaNotas = notas.reduce((acc, notas) => acc + notas, 0);
   // O primeiro parâmetro é a função callback obrigatória para retornar o cálculo. A função é escrita dentro do reduce
    // O zero é o valor inicial e o segundo parâmetro do reduce

    const media = somaNotas / notas.length;
    return media
}

console.log(`A média da sala de JS é: ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é: ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é: ${calculaMedia(salaPython)}`);