let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var esquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(esquerdaQuadrado < 40 && esquerdaQuadrado > 0 && topoPersonagem >= 450){
      quadrado.style.animation = 'none'
      quadrado.style.display = 'none'
      alert('você perdeu')
    }

}, 10)