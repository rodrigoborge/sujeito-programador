// var nome = prompt('Qual o seu nome?');
// var sobrenome = prompt('Digite seu sobrenome');

// console.log('Olá ' + nome + ' ' + sobrenome);

// document.write('<h1>Bem vindo ao projeto, ' + nome + '!</h1>');
// document.write('<img src="https://sujeitoprogramador.com/steve.png" alt="Foto do Steve Jobs" />');

// Funções no JavaScript

// var area = document.getElementById('area');

// function entrar() {
//     var nome = prompt('Digite seu nome');

//     if (nome === '' || nome === null) {
//         alert('Ops! Algo deu errado.');
//         area.innerHTML = 'Clique no botão para acessar';
//     } else {
//         area.innerHTML = 'Bem-vindo, ' + nome + '!';

//         let botaoSair = document.createElement('button');
//         botaoSair.innerText = 'Sair da Cconta';
//         botaoSair.onclick = sair;
//         area.appendChild(botaoSair);
//     }
// }

// function sair() {
//     alert('Até mais...');
//     area.innerHTML = 'Você saiu!';
// }

// function mediaAluno(nota1, nota2) {
//     var media = (nota1 + nota2) / 2;

//     if (media >= 7) {
//         console.log('Aluno aprovado com a média: ' + media);
//     } else if (media <= 7) {
//         console.log('Aluno reprovado pois tirou media: ' + media);
//     }
// }

// function aluno(nome, curso) {
//     var mensagem = 'Seja bem-vindo ' + nome + ' ao curso de ' + curso;
//     console.log(mensagem);
// }

// Loops
// While - Enquanto

// var x = 0;
// while (x < 11) {
//     document.write('<br> O valor do X é: ' + x);
//     x++;
// }

//FOR

// var valor = 30;

// for (a = 0; a <= valor; a++) {
//     document.write('Valor do a é: ' + a + '<br>');
// }

// SWITCH

// function pedir() {
//     var valor = prompt('Digite o valor de 1 a 4');

//     switch (Number(valor)) {
//         case 1:
//             alert('Voce escolheu SUCO');
//             break;
//         case 2:
//             alert('Voce escolheu ÁGUA GElADA');
//             break;
//         case 3:
//             alert('Voce escolheru SORVETE');
//             break;
//         case 4:
//             alert('Voce chamou o GARÇOM');
//             break;
//         default:
//             alert('ERRO! Volte e escolha um numero de 1 a 4');
//             break;
//     }
// }
