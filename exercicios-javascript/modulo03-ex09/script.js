// EXERCÍCIO 09 | MÓDULO 3
// Objetivo: identificar um loop infinito SEM executá-lo, e corrigir um erro
// clássico de índice (<= no lugar de <).

// ------------------------------------------------------------------
// PARTE 1: laço infinito (NÃO DESCOMENTE ESTE BLOCO E NÃO EXECUTE ASSIM,
// ele travaria a aba do navegador).
//
// for (let numero = 10; numero <= 10; numero--) {
//   console.log(numero);
// }
//
// Tarefa 1: leia o código comentado acima com atenção (inicialização,
//         condição e atualização) e explique, em um comentário aqui embaixo,
//         por que esse laço NUNCA vai parar.
//
// minha explicação:


// Tarefa 2: reescreva embaixo uma VERSÃO CORRIGIDA desse laço, que realmente
//         faça uma contagem regressiva de 10 até 1 e pare corretamente.
//         Esta versão corrigida pode ser executada normalmente.


// ------------------------------------------------------------------
// PARTE 2: erro de índice (<= no lugar de <). Este trecho é seguro de rodar,
// arrays em JavaScript não travam o navegador ao serem acessados fora do
// intervalo, mas o resultado sai errado (aparece "undefined").

const cores = ["azul", "verde", "amarelo"];

for (let i = 0; i <= cores.length; i++) {
  console.log(cores[i]);
}

// Tarefa 3: execute o trecho acima e observe a última linha mostrada no console.
//         O que aparece na última posição, e por quê?


// Tarefa 4: corrija o for acima (troque <= por <) para que o laço mostre
//         exatamente as três cores, sem "undefined".

