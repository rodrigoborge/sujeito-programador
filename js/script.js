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

// var valor = 30;
// if (valor < 23) {
//     console.log('O numero é menor que 23');
// }

// var nome = 'Rodrigo';
// var userOnline = false;

// if (userOnline === false) {
//     console.log('Usuário está OnLine!');
// } else {
//     console.log('Usuário está OffLine!');
// }

// var numero = 10;

// numero === 10 ? console.log('Numero igual a 10') : console.log('Numero diferente de 10');

//TEMPORIZADORES
// SET INVERVAL
// function acao() {
//     document.write('Executando... <br/>');
// }

// // var timer = setInterval(() => {
// //     document.write('Executando... <br/>');
// // }, 1000);

// //SET TIMEOUT
// setTimeout(() => {
//     console.log('Executou o Timeout!');
// }, 3000);

//________________________________
// DIFERENÇAS ENTRE VAR LET E CONST

// Var - Consegue acessar dentro do código todo
// Let - Consegue acessar apenas dentro do escopo de criação (Apenas dentro das {})
// Const - Funciona semelhante ao let, apenas onde é criado, porém o valor é imutavel, não é possivel alterar o valor após criado,
//         além disso o valor precisa ser definido na criação.

//OBJETOS

// let pessoa = {
//     nome: 'Rodrigo',
//     idade: '35',
//     altura: 1.83,
//     cargo: 'Programador',
// };

// console.log(pessoa);

// let carro = {
//     nome: 'Golf 1.6',
//     cor: 'Branco',
//     potencia: '140cv',
// }

// let usuarios = [
//     { nome: 'Rodrigo', cargo: 'Programador', status: 'Ativo,' },
//     { nome: 'Maria', cargo: 'Programadora', status: 'Ativo' },
//     { nome: 'Jose', cargo: 'RH', status: 'Ativo:' },
// ];

//TEMPLATE STRINGS

// let nome = 'Rodrigo';
// let sobrenome = 'Borge';
// let idade = 35;

// let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade`;

// console.log(mensagem);

//OBJETOS

// let pessoa = {
//     nome: 'Rodrigo',
//     sobrenome: 'Borge',
//     empresa: 'BNRY',
//     cargo: 'Founder',
// };

// let nome = 'Teste';

// // console.log(pessoa.nome);
// // console.log(pessoa.cargo);

// const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa;

// console.log(nome);
// console.log(nomePessoa);
// console.log(sobrenome);
// console.log(empresa);
// console.log(cargo);

// DESCONSTRUIR UM ARRAY

// let nomes = ['Rodrigo', 'Lucas', 'Henrique'];
// // let { 0: rodrigo, 2: henrique } = nomes;

// // console.log(rodrigo);
// // console.log(henrique);

// let [primeiroNome, segundoNome, terceiroNome] = nomes;
// console.log(primeiroNome);

// SPREAD OPERATOR

// let primeiros = [1, 2, 3];
// let numeros = [...primeiros, 4, 5, 10];
// console.log(numeros);

// let pessoa = {
//     nome: 'Rodrigo',
//     idade: 45,
//     cargo: 'RH',
//     empresa: 'BNRY',
// };

// let novaPessoa = {
//     ...pessoa,
//     status: 'Ativo',
//     cidade: 'Curitiba - pr',
//     telefone: '(41) 99747-5898',
// };

// console.log(novaPessoa);

// function novoUsuario(info) {
//     let data = {
//         ...info,
//         status: 'Ativo',
//         inicio: '23/02/2024',
//         codigo: '123123',
//     };
//     console.log(data);
// }

// novoUsuario({ nome: 'Jose', sobrenome: 'Silva', cargo: 'DEV' });

// REST OPERATOR

// function convidados(...nomes) {
//     console.log('SEJAM BEM-VINDOS!!');
//     console.log(nomes);
// }

// convidados('Rodrigo', 'Flavia', 'Maria', 'Ana');

function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log('O numero gerado foi: ' + numeros[numeroGerado]);
}

sorteador(1, 4, 2, 6, 78, 09, 34, 56, 23, 676, 56, 45, 23, 12, 79, 4, 7);
