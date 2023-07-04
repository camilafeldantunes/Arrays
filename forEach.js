const notas = [10, 6.5, 8, 7.5];

let soma = 0;
let i = 0;

notas.forEach(function () {
    soma += notas[i];
    i++
 })

notas.forEach(function(nota){
    soma += nota;
})



console.log(soma);