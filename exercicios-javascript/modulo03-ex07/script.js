// EXERCÍCIO 07 | MÓDULO 3
// Objetivo: percorrer um array usando for, índice e .length.
// Um array guarda vários valores em uma única variável, acessados por índice (posição),
// começando do índice 0. Por exemplo: notas[0] é o primeiro valor do array.

const notas = [7.5, 8, 6.5, 9, 10];

// Tarefa 1: escreva um for que comece em "let i = 0", continue enquanto
//         "i < notas.length" (NÃO use <=, ou o laço vai tentar acessar uma
//         posição que não existe) e aumente com "i++".
//         Dentro do bloco, use console.log(notas[i]) para mostrar cada nota.


// Tarefa 2: declare uma variável com let chamada "soma", começando em 0, ANTES
//         do laço acima.


// Tarefa 3: dentro do MESMO for da Tarefa 1, some cada nota a "soma"
//         (soma += notas[i];).


// Tarefa 4: depois do laço, calcule a média dividindo "soma" por "notas.length"
//         e guarde em uma const "media". Mostre "media" no console.


// Tarefa 5 (desafio): troque a condição do for de "i < notas.length" para
//         "i <= notas.length" só para observar o erro. Leia a mensagem no
//         console (deve aparecer "undefined" em algum ponto) e explique, em
//         um comentário, por que isso acontece. Depois, volte para "i < notas.length".

