// EXERCÍCIO 10 | MÓDULO 3
// DESAFIO DO MÓDULO: gerar duas listas na página (aprovados e reprovados)
// a partir de um array de nomes e um array de médias.
// Os dois arrays têm o MESMO tamanho: nomes[i] é o nome do aluno que tem a
// média medias[i]. Por exemplo, nomes[0] é "Marina" e sua média é medias[0] = 7.5.

const nomes = ["Marina", "Caio", "Ravi", "Iara", "Luiza"];
const medias = [7.5, 5.5, 9, 4, 6];

// Tarefa 1: use document.querySelector() para pegar a <ul id="listaAprovados">
//         e guardar em uma const "listaAprovados".


// Tarefa 2: use document.querySelector() para pegar a <ul id="listaReprovados">
//         e guardar em uma const "listaReprovados".


// Tarefa 3: escreva um for que percorra os arrays usando um único índice "i",
//         de 0 até nomes.length (não esqueça: i < nomes.length, sem o igual).


// Tarefa 4: dentro do for, crie um elemento <li> com
//         document.createElement("li") e coloque nele o nome do aluno seguido
//         da média, por exemplo usando template string:
//         `${nomes[i]} - média ${medias[i]}`


// Tarefa 5: dentro do MESMO for, escreva um if/else que teste se medias[i] é
//         maior ou igual a 6:
//         - se for verdadeiro, adicione o <li> na "listaAprovados"
//           (listaAprovados.appendChild(item);)
//         - se for falso, adicione o <li> na "listaReprovados"


// Tarefa 6: abra o index.html no navegador e confira se os nomes aparecem
//         nas listas certas, com a cor de feedback já definida pelo CSS.


// Tarefa 7 (desafio): acrescente mais um nome e mais uma média nos dois
//         arrays (mantendo os dois arrays do mesmo tamanho) e confira se a
//         nova pessoa aparece na lista correta.

