let pe1 = document.getElementById('pe1')
let pe2 = document.getElementById('pe2')
let pe3 = document.getElementById('pe3')
let pergunta = document.getElementById('pergunta')
let quiz = document.getElementById('quiz')
let contagem = 0
let pessoa = "" 


function nome() {
let divnom = document.getElementById('divnome')
let n = document.getElementById('nome').value
if (n.trim() == "" || /\d/.test(n)) {
    let valido = document.getElementById('valido')
    valido.textContent = 'Insira um nome valido'
} else {
    let p = n[0].toUpperCase()
    let r = n.slice(1)
    pessoa = `${p}${r}`
    pergunta.textContent = `${pessoa}, qual seu nível de ingles atual?`
    divnom.style.display = 'none'
    quiz.style.display = 'block'
    contagem++
}
}

let np = ""


function proxima(sumir, aparecer, nivel) {
    sumir.style.display = 'none'
    aparecer.style.display = 'grid'
    console.log(nivel)
    if(contagem == 1) {
        if (nivel == 'Basico') {
           pergunta.textContent = `Todo começo é importante! Estamos preparando um
        projeto para te ajudar a sair desse nível. Qual a sua maior dificuldade?`
           np = 'Basico'
        }

        if (nivel == 'iniciante') {
            pergunta.textContent = `Ótimo, já está no caminho certo ${pessoa}! Estamos 
            preparando um produto que pode fazer com que você aprenda muito mais rápido!
            O que mais te trava no inglês?`
            np = 'Iniciante'
        }

        if (nivel == 'Intermediario') {
            pergunta.textContent = `Bom progresso! Quando se é um intermediario já é possível 
            conversar sem preocupações, Onde você sente mais dificuldade no inglês?`
            np = 'Intermediario'
            }
     
        if (nivel == 'Avançado') {
            pergunta.textContent = `Mandando bem em ${pessoa}! Sendo avançado você já deve
            ter um inglês bem fluente. Em qual parte do inglês você quer se aprofundar?`
            np = 'Avançado'
            }
    }
    if(contagem == 2) {
        pergunta.textContent = ` ${pessoa}, o que você acha que é o mais importante para ter um inglês fluido e natural?`
    }
    if(contagem == 3) {
        pergunta.textContent = ''
        let fimt = document.getElementById('final')
        fimt.textContent = `Muito bem ${pessoa}, eu preparei um guia de inglês para pessoas de todos os 
        níveis, inclusive o seu, (${np}) !, Ele foi criado para deixar o inglês mais dinâmico e divertido. 
        De uma olhada lá, acho que pode te interressar!`
    }
    contagem++
}







