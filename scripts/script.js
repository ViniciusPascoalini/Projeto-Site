function mouseInImg(){
    let div = window.document.querySelector("div#img01")
    div.innerHTML = "Click para (fazer alguma coisa)!!!"
}
function mouseOutImg(){
    let div = window.document.querySelector("div#img01")
    div.innerHTML = `<img src="imagens/goodLookingPerson.png" alt="png">`   
}
function mouseClickImg(){
    window.alert("clicou!!!")
}