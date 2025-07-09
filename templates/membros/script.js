document.addEventListener('click', (a)=> {
     let x = a.pageX
     let y = a.pageY
     let bolha = document.createElement('div')
     bolha.classList.add('bolha')
     bolha.style.left = `${x - 20}px`
     bolha.style.top = `${y - 20}px`
     document.body.appendChild(bolha)
    bolha.addEventListener('animationend', ()=> {
        bolha.remove()
    })
})







