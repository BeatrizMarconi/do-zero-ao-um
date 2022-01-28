let botaoEnviar = document.getElementById("botaoEnviar");
let resultado = document.getElementById("resultado");

botaoEnviar.addEventListener("click", validaFormulario);

function validaFormulario () {

    let inputPeso = document.getElementById('peso').value
    let inputAltura = document.getElementById('altura').value.replace(',', '.') 

    if (inputPeso !=='' && inputAltura !== ''){
        let peso = parseFloat(inputPeso)
        let altura = parseFloat(inputAltura)
        let imc = (peso / Math.pow(altura,2)).toFixed(0)

        if (imc >=18.5 && imc <= 29){
            mensagem ('Você está no peso ideal! Seu IMC  ', imc )

        }else if (imc >= 30 && imc <= 34.9){
            mensagem ('Você está com Obesidade Grau 1! Seu IMC é', imc)

        }else if (imc >= 35 && imc <= 39.9){
            mensagem ('Você está com Obesidade Grau 2! Seu IMC é', imc)

        }else if (imc >= 40){
            mensagem ('Você está com Obesidade Grau 3! Seu IMC é', imc )

        }else{
            mensagem ('Você está Abaixo do Peso! Seu IMC é', imc)
        }
    }else{
        alert('Por favor, Preencha todos os campos!')
    }    
}

function mensagem(message, imc) {
    resultado.innerHTML= `<p class="paragraph"> ${message} : ${imc}<p>`;
}


