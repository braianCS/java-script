// EXERCÍCIO 09 | MÓDULO 2
// Objetivo: validar uma entrada antes de classificá-la, na ordem correta.
// Ordem obrigatória de validação:
//   1º) o usuário cancelou o prompt (entrada === null)?
//   2º) o texto está vazio (depois de trim())?
//   3º) o texto não é um número válido (Number.isNaN)?
//   4º) o número está fora da faixa de 0 a 10?
//   5º) só então classificar: >= 6 é "Aprovado", senão "Recuperação".

const entrada = prompt("Digite uma nota de 0 a 10:");

// Tarefa 1: escreva um if que teste "entrada === null" e mostre "Operação cancelada."
//         quando for verdadeiro.

// Tarefa 2: dentro de um else if, teste se entrada.trim() === "" e mostre
//         "Você não digitou uma nota." quando for verdadeiro.
//         ATENÇÃO: só é seguro chamar .trim() aqui porque já garantimos, no
//         Tarefa 1, que "entrada" não é null.

// Tarefa 3: dentro de outro else, converta "entrada" para número com Number()
//         e guarde em uma const "nota". Dentro desse else, escreva uma nova
//         cadeia de if / else if / else que trate, NESTA ORDEM:
//           a) Number.isNaN(nota)  -> mostrar "Digite um número válido."
//           b) nota < 0 || nota > 10 -> mostrar "A nota deve estar entre 0 e 10."
//           c) nota >= 6 -> mostrar "Aprovado."
//           d) qualquer outro caso -> mostrar "Recuperação."

// Tarefa 4: teste o programa cancelando o prompt, deixando vazio, digitando "abc",
//         digitando "15" e digitando "8". Confira se cada caso mostra a
//         mensagem certa.

