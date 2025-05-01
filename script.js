function sim(n) {
    let resposta = document.getElementById(`dia${n}`)
    let paragrafo = document.getElementById(`tex${n}`)
    let caixa = document.getElementById(`per${n}`)
    if (n == 270325) {
        resposta.innerHTML = `Muito obrigado pelo apoio, vou seguir com o planejado!`
    }
    if (n == 60425) {
        paragrafo.innerHTML = `&nbsp;&nbsp;<span class="destaque">Então você vai entender o assunto de hoje!</span>
O fato de você sentir que não é tão experiente que alguém, significa que provavelmente <span class="destaque">você 
está aprendendo algo novo</span>, caso contrário você não sentiria essa sensação, exemplo: <br>
&nbsp;&nbsp;Quando você está aprendendo um esporte novo, e vê alguém que tem <span class="destaque">mais habilidade
que você</span>, você se sentiria <span class="destaque">menos experiente</span>, certo? <br>
&nbsp;&nbsp;Por outro lado, se você sabe que aquela pessoa é <span class="destaque">melhor do que você naquele 
esporte</span>, só que você não o pratica, <span class="destaque">você não sentiria essa sensação!</span>
Pois ela só vem quando você está no mesmo círculo de comparação que a outra pessoa!<br>
&nbsp;&nbsp;Então se você está aprendendo algo novo, é <span class="destaque">ótimo que tenha encontrado alguém 
melhor do que você</span>, pois assim você aprenderá mais, e terá mais motivação para seguir em frente, é
como na musculação, <span class="destaque">se seu companheiro pega mais peso, você deverá se tornar mais
forte para acompanhá-lo!</span>`
}

    if (n == 190425) {
        paragrafo.innerHTML = `&nbsp;&nbsp;Se você tem um sonho, eu quero te falar uma coisa, <span class="destaque">corra atrás</span>, do mesmo jeito que
        estou indo em busca do meu, eu quero que você também chegue até o seu, <span class="destaque">independente das dificuldades</span>,
        se você parar agora, no futuro, você vai se <span class="destaque">arrepender</span>, eu sei disso por conta própria. A pergunta que você tem que se fazer é, 
        <span class="destaque">eu estou indo atrás dos meus sonhos?</span>`
    }
    caixa.style.display = 'none'

}

function nao(n) {
    let resposta = document.getElementById(`dia${n}`)
    let caixa = document.getElementById(`per${n}`)
    let paragrafo = document.getElementById(`tex${n}`)
    if (n == 270325) {
        resposta.innerHTML = `Que pena que não se  interessou, quem sabe um dia você mude de ideia!`
    }
    if (n == 60425) {
        paragrafo.innerHTML = `&nbsp;&nbsp;Bom se você nunca sentiu essa sensação saiba que provavelmente
<span class="destaque">você está deixando de aprender muitas coisas.</span><br>
&nbsp;&nbsp;Quando você encontra <span class="destaque">alguém melhor que você</span> em algo, você 
<span class="destaque">aprende com essa pessoa e ainda a usa como inspiração.</span><br>
&nbsp;&nbsp;Então ao invés de você sempre ser o melhor, tente encontrar alguém que seja melhor do que você,
e <span class="destaque">evolua junto com ela!</span>`
}
    if (n == 190425) {
        paragrafo.innerHTML = `&nbsp;&nbsp;<span class="destaque">Você não tem um sonho?</span> Uau, eu estou surpreso agora! <br>
        &nbsp;&nbsp;Você não está indo atrás de nada então, certo? Então <span class="destaque">oque você faz?</span> Você vive em qual sentido?
        Faça essa perguntas para você mesmo, <span class="destaque">por que eu estou vivo?</span> Mesmo assim, se você ainda não conseguir 
        responder, tente procurar <span class="destaque">algo que te interesse</span>, algo pra você ir atrás, <span class="destaque">se você não quiser, tudo bem!</span>
        mas é bom saber que temos um objetivo. <span class="destaque">Um motivo para seguir em frente!</span>`
    }
    caixa.style.display = 'none'

}






