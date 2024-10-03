
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce ve a necessidade de encontrar um emprego?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo e com receio de ficar desempregado "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "tentou encontrar um emprego o mais rapido possivel."
            }
        ]
    },
    {
        enunciado: "voce encontrou um emprego",
        alternativas: [
            {
                texto:"comecou a trabalhar nase empresa",
                afirmacao: "consegue trabalhar com facilidade"
            },
            {
                texto: "trabalha nessa empresa",
                afirmacao: "tem dificudades mas mesmo assim continua"
            }
        ]
    },
    {
        enunciado:"apos um tempo voce trabalhando nessa empresa comeca a se destacar",
        alternativas: [
            {
                texto: "voce propoem que a empresa deve se inovar",
                afirmacao: "voe ajudara a empresa e podera ganhar um aumento."
            },
            {
                texto: "acha que a empresa deve continuar do modo que esta ",
                afirmacao:"a empresa continua igual e ainda a a chance de aumento"
            }
        ]
    },
    {
        enunciado: "voce vai resceber um aumento",
        alternativas: [
            {
                texto: "sai contando para todos ",
                afirmacao: "seu colegas podem ficar bravos com voce "
            },
            {
                texto: "guarda para voce",
                afirmacao: "ninguem ficara sabendo do seu aumento"
            }
        ]
    },
    {
        enunciado: "Voce rescebeu uma proposta de uma nova empresa ",
        alternativas: [
            {
                texto: "voce aceita a proposta",
                afirmacao: "voce agora trabalha para essa nova empresa e se da muito bem na vida "
            },
            {
                texto: "voce nao aceita a proposta",
                afirmacao: "voce continua na mesma empresa e tambem se da bem na vida "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
