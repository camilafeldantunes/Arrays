const alunos = ["Camila", "Valentina", "Rafaela", "Marina"];
const notas = [10, 4.5, 8, 7];

const reprovados = alunos.filter((_, indice) => {
    return notas[indice] < 7;
})

console.log(reprovados);