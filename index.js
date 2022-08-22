const calculadora= document.querySelector('.container')
const teclas = calculadora.querySelector('.container-teclas')

teclas.addEventListener('click', e=>{
    if(e.target.matches('button')){
        const tecla= e.target
        const acao = tecla.dataset.acao
        if(!acao){
            console.log('tecla numerica!')
        }
    }
})