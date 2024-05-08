var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samanta= window.document.getElementById("samanta")


function MoverParaDireita(){
    samanta.style = "display: none"
    leonardo.style = "display: flex"
    setaEsquerda.style = "display: flex"
    setaDireita.style = "display: none"
}

function MoverParaEsquerda(){
    samanta.style = "display: flex"
    leonardo.style = "display: none"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}