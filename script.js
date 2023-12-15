var nome = document.getElementById('nome')
var idade = document.getElementById('idade')
var pesoinput = document.getElementById('peso')
var alturainput = document.getElementById('altura')
var button = document.querySelector('.bt_calcular')
var valor = document.querySelector('.valor_imc')
var status_pessoa = document.querySelector('.status')


function CalcularIMC(){
    var peso = Number(pesoinput.value)
    var altura = Number(alturainput.value)
    var imc = peso/(altura**2)
    imc = imc.toFixed(1)
    valor.textContent = imc

    if(imc < 18.5){
        status_pessoa.textContent = 'Baixo peso'
    }
    else if(imc < 24.9){
        status_pessoa.textContent = 'Normal'
    }
    else if(imc < 29.9){
        status_pessoa.textContent = 'Sobrepeso'
    }
    else if(imc < 34.9){
        status_pessoa.textContent = 'Obeso I'
    }
    else if(imc < 39.9){
        status_pessoa.textContent = 'Obeso II'
    }
    else{
        status_pessoa.textContent = 'Obeso III'
    }
}

button.addEventListener("click", CalcularIMC)

