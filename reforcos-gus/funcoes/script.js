//https://www.youtube.com/watch?v=CGotHHt3BFU&list=PLylCwvNCtoak0OiZIdjgN9JSQFwR4Upfv&index=11

//Function padrão
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5, 2));

//Funçao de Seta - Arrow Function
const soma2 = (num2, num3) => {
    return num2 + num3;
};
console.log(soma2(10, 20));

//Early Return
const soma3 = (num5, num6) => num5 + num6;
console.log(soma3(40, 60));

// Funçao que retorna o maior e o menor numero de um array
const arrayNumeros = [10, 78, 3, 12, 1];
const arrayNumeros2 = [78, 34, 0, -9, 124, 178, 332, 4, 5];

function maiorMenorNumero(array) {
    let maior = array[0];
    let menor = array[0];

    for (let index = 1; index < array.length; index += 1) {
        if (array[index] > maior) {
            maior = array[index];
        } else {
            menor = array[index];
        }
    }

    //return [maior, menor];
    return `O maior numero é o ${maior} e o menor é o ${menor}`;
}
//A resposta precisa ser: 78,1

console.log(maiorMenorNumero(arrayNumeros));
console.log(maiorMenorNumero(arrayNumeros2));

//Função que retorna um array ordenado de forma crescente
function ordenacao(array) {
    let temp;

    for (let index = 0; index < array.length; index += 1) {
        for (let compare = index + 1; compare < array.length; compare += 1) {
            if (array[index] > array[compare]) {
                temp = array[index];
                array[index] = array[compare];
                array[compare] = temp;
            }
        }
    }
    return `A ordenação crescente é ${array}`;
}

//Função que retorna um array ordenado de forma crescente
function ordenacaoDecrescente(array) {
    let temp;

    for (let index = 0; index < array.length; index += 1) {
        for (let compare = index + 1; compare < array.length; compare += 1) {
            if (array[index] < array[compare]) {
                temp = array[index];
                array[index] = array[compare];
                array[compare] = temp;
            }
        }
    }
    return `A ordenação decrescente é ${array}`;
}

console.log(ordenacao(arrayNumeros));
console.log(ordenacaoDecrescente(arrayNumeros));

//Ordenaçao com .sort
const ordenacaoComSort = (array) => array.sort((a, b) => a - b);
console.log(ordenacaoComSort(arrayNumeros))