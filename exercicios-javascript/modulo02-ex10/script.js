// EXERCÍCIO 10 | MÓDULO 2
// DESAFIO DO MÓDULO: classificador de IMC com feedback visual.
// Regra de classificação (simplificada para fins didáticos):
//   IMC < 18.5            -> "Abaixo do peso"   (classe CSS: "abaixo")
//   18.5 <= IMC < 25       -> "Peso normal"       (classe CSS: "normal")
//   25 <= IMC < 30         -> "Sobrepeso"         (classe CSS: "sobrepeso")
//   IMC >= 30              -> "Obesidade"         (classe CSS: "obesidade")
// Neste momento, assuma que a pessoa digita valores válidos.

// Tarefa 1: use prompt() para perguntar o peso em quilogramas (ex.: "70") e
//         converta para número com Number(). Guarde em uma const "peso".


// Tarefa 2: use prompt() para perguntar a altura em metros (ex.: "1.75") e
//         converta para número com Number(). Guarde em uma const "altura".


// Tarefa 3: calcule o IMC com a fórmula peso / (altura * altura) e guarde em
//         uma const "imc". Não esqueça dos parênteses!


// Tarefa 4: declare "let mensagem" e "let classe" (ainda sem valor).


// Tarefa 5: escreva uma cadeia if / else if / else if / else que, de acordo com
//         o valor de "imc", atribua o texto certo a "mensagem" e o nome da
//         classe certa (sem aspas erradas, exatamente "abaixo", "normal",
//         "sobrepeso" ou "obesidade") a "classe". Siga a regra do comentário
//         no topo do arquivo.


// Tarefa 6: use document.querySelector("#resultado") para pegar o parágrafo e
//         guarde em uma const "resultado".


// Tarefa 7: troque o texto do parágrafo com resultado.textContent = mensagem
//         (pode usar template string para incluir o valor de imc também).


// Tarefa 8: adicione a classe calculada ao parágrafo com:
//         resultado.classList.add(classe);
//         Isso vai mudar a cor da caixa de acordo com a classificação.

