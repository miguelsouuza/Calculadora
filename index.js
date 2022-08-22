function insert(num){
    let numero = document.querySelector(`#resultado`).innerHTML
    document.querySelector(`#resultado`).innerHTML=numero+num
}
function limpar(){
    document.querySelector(`#resultado`).innerHTML=""
}
function apagar(){
   var resultado= document.querySelector(`#resultado`).innerHTML
   /* subtring pega todos os caracteres dentro do paragrafo e diminui em um*/
   document.querySelector(`#resultado`).innerHTML= resultado.substring(0,resultado.length -1)
}
function calcular(){
    var resultado= document.querySelector(`#resultado`).innerHTML
    if(resultado)
    {
        document.querySelector(`#resultado`).innerHTML= eval(resultado)
    }
}