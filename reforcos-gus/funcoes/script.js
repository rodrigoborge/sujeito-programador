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

    return [maior, menor];
}
//A resposta precisa ser: 78,1

console.log(maiorMenorNumero(arrayNumeros));
