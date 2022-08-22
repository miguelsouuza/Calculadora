function insert(num){
    let numero = document.querySelector(`#resultado`).innerHTML
    document.querySelector(`#resultado`).innerHTML=numero+num
}
function limpar(){
    document.querySelector(`#resultado`).innerHTML=""
}