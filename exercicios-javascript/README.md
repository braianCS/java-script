# Exercícios de JavaScript — Módulos 0 a 3

Índice de exercícios hands-on para o curso técnico de informática (ensino médio), baseados na apostila de JavaScript (módulos 0 a 3). Os alunos já sabem HTML e CSS; o foco de cada exercício é a lógica em JavaScript.

## Como usar

- Cada exercício fica em sua própria pasta, no padrão `moduloXX-exYY/`.
- Cada pasta contém `index.html` e `script.js` já ligados via `<script src="script.js" defer></script>`. Alguns exercícios também têm `style.css` (quando o estilo é parte do feedback do exercício — nesses casos, o aluno não precisa editar o CSS).
- O que o aluno deve fazer está marcado com comentários numerados `// Tarefa` (no JS) e `<!-- Tarefa -->` (no HTML). O código não está resolvido: o aluno completa as lacunas.
- Recomenda-se abrir cada `index.html` no navegador e acompanhar pelo console (F12).

## Módulo 0 — Boas-vindas ao JavaScript

| Pasta | Título | Objetivo |
|---|---|---|
| `modulo00-ex01` | Sua primeira mensagem no console | Ligar HTML e JS e ver a primeira mensagem no console. |
| `modulo00-ex02` | Várias mensagens, em ordem | Usar três `console.log` em sequência e observar a execução sequencial. |
| `modulo00-ex03` | Texto ou conta? | Diferenciar uma expressão em texto (com aspas) de uma expressão calculada (sem aspas). |
| `modulo00-ex04` | Comentando um código | Usar comentários de uma linha e de bloco para documentar um código pronto. |
| `modulo00-ex05` | Caça ao bug: arquivo não encontrado | Corrigir a ligação entre HTML e JS (atributo `src` errado). |
| `modulo00-ex06` | Caça ao bug: SyntaxError | Ler uma mensagem de `SyntaxError` e corrigir uma aspa não fechada. |
| `modulo00-ex07` | Caça ao bug: ReferenceError e TypeError | Corrigir um nome digitado errado e investigar um `TypeError`. |
| `modulo00-ex08` | Console além do log | Usar `console.info`, `console.warn`, `console.error` e agrupar valores em uma chamada. |
| `modulo00-ex09` | Até onde o programa chegou? | Usar mensagens de etapa para descobrir onde a execução de um programa para. |
| `modulo00-ex10` | Desafio: cartão de apresentação no console | Combinar boas-vindas, conta, comparação e encerramento em um programa completo. |

## Módulo 1 — Variáveis e tipos

| Pasta | Título | Objetivo |
|---|---|---|
| `modulo01-ex01` | Minhas primeiras variáveis | Declarar constantes com `const` e mostrar seus valores no console. |
| `modulo01-ex02` | let ou const? | Praticar reatribuição com `let` e observar o erro ao reatribuir uma `const`. |
| `modulo01-ex03` | Os cinco tipos básicos | Criar uma variável de cada tipo primitivo e identificar o tipo com `typeof`. |
| `modulo01-ex04` | Juntando textos com + | Usar o operador `+` para concatenar strings e montar uma frase. |
| `modulo01-ex05` | A mesma frase com template string | Reescrever uma concatenação usando template strings (`` ` `` e `${}`). |
| `modulo01-ex06` | Operadores aritméticos e parênteses | Calcular uma média e uma conversão de temperatura usando parênteses corretamente. |
| `modulo01-ex07` | Convertendo tipos | Usar `Number()`, `String()` e `Boolean()` para converter valores entre tipos. |
| `modulo01-ex08` | Saldo com depósitos e compras | Usar `let` e reatribuição para simular um saldo que muda ao longo do tempo. |
| `modulo01-ex09` | Ficha do estudante na página | Usar `document.querySelector` e `textContent` para exibir um valor no HTML. |
| `modulo01-ex10` | Desafio: calculadora de consumo de água | Combinar `prompt`, conversão, template string e `textContent` em um programa completo. |

## Módulo 2 — Ensinando o programa a decidir

| Pasta | Título | Objetivo |
|---|---|---|
| `modulo02-ex01` | Minha primeira decisão | Usar `if` simples para executar um bloco somente quando uma condição é verdadeira. |
| `modulo02-ex02` | Par ou ímpar? | Usar `if/else` e o operador `%` para classificar um número. |
| `modulo02-ex03` | Aprovado ou recuperação? | Usar comparações e testar valores exatamente na fronteira da condição. |
| `modulo02-ex04` | Duas condições ao mesmo tempo (&&) | Usar `&&` para exigir que duas condições sejam verdadeiras ao mesmo tempo. |
| `modulo02-ex05` | Pelo menos uma condição (\|\|) e negação (!) | Usar `\|\|` para aceitar qualquer uma de duas condições, e `!` para negar um valor. |
| `modulo02-ex06` | Conceito da nota (A, B, C ou D) | Usar `else if` para escolher entre mais de dois caminhos, na ordem correta. |
| `modulo02-ex07` | Reescrevendo com operador ternário | Transformar uma decisão curta em `if/else` em uma linha com o operador ternário. |
| `modulo02-ex08` | Menu com switch | Usar `switch`/`case`/`break` para tratar um conjunto de opções exatas. |
| `modulo02-ex09` | Validar antes de classificar | Tratar cancelamento, texto vazio e valor inválido antes de classificar uma nota. |
| `modulo02-ex10` | Desafio: classificador de IMC | Combinar `prompt`, várias condições e feedback visual com classes CSS. |

## Módulo 3 — Repetindo sem copiar e colar

| Pasta | Título | Objetivo |
|---|---|---|
| `modulo03-ex01` | Meu primeiro for | Escrever um laço `for` que conta de 1 até 10. |
| `modulo03-ex02` | Contagem regressiva | Escrever um `for` decrescente, terminando com uma mensagem final. |
| `modulo03-ex03` | Contando de 2 em 2 | Usar um passo diferente de 1 na atualização do `for`. |
| `modulo03-ex04` | Somatório com for | Usar um acumulador dentro de um `for` para somar uma sequência de números. |
| `modulo03-ex05` | O mesmo laço com while | Reescrever um `for` como `while`, controlando manualmente a variável de controle. |
| `modulo03-ex06` | Menu com do...while | Usar `do...while` para garantir que um bloco execute pelo menos uma vez. |
| `modulo03-ex07` | Percorrendo um array de notas | Usar `for`, índice e `.length` para percorrer um array e calcular uma média. |
| `modulo03-ex08` | Gerando uma lista na página | Percorrer um array e criar elementos `<li>` dinamicamente dentro de uma `<ul>`. |
| `modulo03-ex09` | Caça ao bug: loop infinito e erro de índice | Reconhecer um laço infinito sem executá-lo e corrigir o erro clássico `<=` no lugar de `<`. |
| `modulo03-ex10` | Desafio: lista de aprovados e reprovados | Combinar `for`, `if` e manipulação do DOM para gerar duas listas classificadas dinamicamente. |

## Progressão de dificuldade

Dentro de cada módulo, os exercícios 1 a 3 são de fixação simples (um conceito por vez), os do meio aprofundam um único conceito com mais autonomia, e os dois ou três últimos — incluindo sempre o "Desafio do módulo" — combinam vários conceitos vistos no módulo, geralmente terminando com o resultado exibido na página (não apenas no console).
