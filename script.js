let ssss = true
// computador
let patrocinio = document.getElementById('patro')
let anuncio = document.getElementById('anuncio')

// let para celular e tablet
let patrociniotc = document.getElementById('patrotc')
let anunciotc = document.getElementById('anunciotc')
patrocinio.addEventListener('click', ()=> {
    window.location.href = 'cola.html'
})

anuncio.addEventListener('click', ()=> {
    window.location.href = 'patro.html'
})

patrociniotc.addEventListener('click', ()=> {
    window.location.href = 'cola.html'
})

anunciotc.addEventListener('click', ()=> {
    window.location.href = 'patro.html'
})

// aviso
/*
setTimeout(()=> {
    let aviso = document.querySelector('.mensagem')
    aviso.classList.add('sumir')
    addEventListener("animationend", ()=> {
        aviso.remove()
    })
},6000)*/

// Quadro de redes sociais 
let si = true
let chamasoc = document.getElementById('chamasoc')
chamasoc.addEventListener('click' , ()=> {
   let redes = document.getElementById('teste-redes')
   if (si) {
    if (innerWidth <= 1024) {
        redes.style.height = "30%"
    }else {
        redes.style.height = "50%"
    }
   }else {
    redes.style.height = '0%'
    }
    si = !si
})

// beficios de membros 
function benemembros() {
    let bemembros = document.getElementById('bemembros')
    if (bemembros.style.display == "block") {
       bemembros.style.display = "none"
    }else {
       bemembros.style.display = "block"
    }
}

//card dos membros 
function chamacard(membro) {
let nomeMembro = document.getElementById('nomeMembro')
let fotoMembro = document.getElementById('fotoMembro')
let descricaomembro = document.getElementById('descricaoMembro')
let profissaoMembro = document.getElementById('profissaoMembro')
let versiteMembro = document.getElementById('versiteMembro')
let card = document.getElementById('card')
if (ssss) {card.style.display = "flex"} else {card.style.display = "none"}
ssss = !ssss
switch (membro) {
    case "0": 
    nomeMembro.innerText = "Quinho Guedez"
    fotoMembro.src = "membros/QuinhoGuedez.jpeg"
    descricaomembro.innerText = "Meu objetivo é alcançar minha liberdade financeira com a internet, e por isso criei meu diario digital"
    profissaoMembro.innerText = "Criador de conteúdo digital."
    versiteMembro.href = 'https://quinhoguedez.com/index.html'
    break
    /*
    case "1": 
    nomeMembro.innerText = "Jujuba"
    fotoMembro.src = "membros/livro3d.png"
    descricaomembro.innerText = "voce vai ser sempre vidadddd"
    profissaoMembro.innerText = "paiiiiiiii"
    versiteMembro.href = 'https://quinhoguedez.com/blog.html'
    break*/
}
}


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

    if (n == 80525) {
        resposta.innerHTML = `Boaaa, que bom que está indo atrás dos seus objetivos, somos dois juntos nessa!`
    }
    if (n == 270625) {
        paragrafo.innerHTML = `&nbsp;&nbsp;Que bom que você é disciplinado!! <br>
            &nbsp;&nbsp;Sabe, as pessoas hoje em dia deixam se levar pelo <span class="destaque">caminho mais 
            fácil</span>, e por isso não conseguem ir muito longe, mas quando você almeja alcançar algo maior, 
            <span class="destaque">não podemos depender de motivação</span>, dias que estamos motivados é muito 
            bom, não posso mentir, mas a motivação acaba rápido, e se nós dependermos dela todo dia, a gente não 
            avança, entende? A motivação ela ajuda, mas a disciplina é mais importante, pois ela nos faz manter a 
            <span class="destaque">constancia</span>, então é muito bom que você tenha disciplina, estou orgulhoso 
            de você, e daqui a algum tempo você vai chegar aonde deseja. <br>
            &nbsp;&nbsp;Se você está disposto a fazer tudo que tem que ser feito e largar oque te atrapalha, 
            <span class="destaque">você está em um outro nível</span>, e pode ter certeza, você vai ir muito 
            longe!<br>
            &nbsp;&nbsp;Eu confio em você, agora mete marcha no seu progresso!!`
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
    if (n == 80525) {
        resposta.innerHTML = `Se você está de boa com a vida que tem eu não posso julgar, mas por que não melhorar, né?`
    }
    if (n == 270625) {
        paragrafo.innerHTML = `&nbsp;&nbsp;Você não se considera uma pessoa disciplinada?? Vou te dar algumas dicas então! <br>
        &nbsp;&nbsp;Oque é ter disciplina? Disciplina, é quando <span class="destaque">você se coloca regras e 
        deixa de dar desculpas</span> para aquilo que você tem que fazer,  ou seja, se eu quero ser mais saudável, 
        eu vou evitar comer besteira, se eu quero ser mais forte eu vou ir para academia, entende? Independente do 
        que você queira, ter disciplina faz com que você siga regras para alcançar seus objetivos! <br>
        &nbsp;&nbsp;Vamos supor que você queira correr uma maratona e tem que correr todo sábado, mas nesse sábado 
        você não está motivado para correr, ter disciplina e ir mesmo sem motivação! E por isso é tão importante! 
        <br>
        &nbsp;&nbsp;Se você quer ter mais disciplina, precisa começar a mudar seus hábitos, ter metas e se dedicar 
        para alcançar! Com o tempo você vai ficando mais disciplinado(a). Então antes de dar desculpas para não 
        fazer oque você não quer, mas precisa, pense, "<span class="destaque">oque alguém disciplinado(a) faria
        </span>", é bom você saber aonde você quer chegar para assim poder traçar a sua jornada, e a 
        <span class="destaque">disciplina vai ajudar você com isso</span>, mas se cada vez que você deixar 
        de fazer oque tem que ser feito, vai ficando mais difícil, pois você se acostuma com isso, então sempre 
        se esforce, por mais que pareça difícil no começo você vai conseguir! <br>
        &nbsp;&nbsp;A <span class="destaque">disciplina vai mudar sua vida</span>, não vai ser fácil, mas no 
        futuro, vai ser melhor!`
    }
    caixa.style.display = 'none'
}









