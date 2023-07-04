const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase()
);

console.log(nomesPadronizados);

const arrayNums = [1, 2, 3, 4];

function multiplica(num){
    return num * 10;
}

const outro = arrayNums.map(multiplica);
console.log(outro);