const form = document.getElementById('form')
var numA = document.getElementById('numA')
var numB = document.getElementById('numB')
const mensagemSuccesso = document.getElementById('sucess-message')
const mensagemErro = document.getElementById('error-message')

let formEvalido = false 

function validanumeros(numeroA, numeroB){
    if(Number(numeroA) < Number(numeroB)){
        return true
    }else{
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    formEvalido = validanumeros(numA.value, numB.value)
    if(formEvalido){
        mensagemErro.innerHTML = ' '
        mensagemErro.style.display = 'none'
        mensagemSuccesso.innerHTML = `Parabéns! O número B: ${numB.value} é maior que o número A: ${numA.value}!`
        mensagemSuccesso.style.display = 'block'
        numA.value = ' '
        numB.value = ' '
    } else{
        mensagemSuccesso.innerHTML = ''
        mensagemSuccesso.style.display = 'none'
        mensagemErro.innerHTML = `Erro: o número B: ${numB.value} não é maior que o número A: ${numA.value}!`
        mensagemErro.style.display = 'block'
        numA.value = ' '
        numB.value = ' '
    }

})
numB.addEventListener ('keyup', function(e){
formEvalido = validanumeros(numA.value, e.target.value)

if (!formEvalido){
    mensagemSuccesso.innerHTML = ''
    mensagemSuccesso.style.display = 'none'
    numB.classList.add('error');
    mensagemErro.innerHTML = `Erro: o número B: ${numB.value} não é maior que o número A: ${numA.value}!`
    mensagemErro.style.display = 'block'
} else{
    numB.classList.remove('error')
    mensagemErro.innerHTML = ''
    mensagemErro.style.display='none'
}
})
