document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario () {

    let inputpeso = document.getElementById('peso').value
    let inputaltura = document.getElementById('altura').value

    let peso = parseFloat(inputpeso)
    let altura = parseFloat(inputaltura)
    let res = (peso / altura **2).toFixed(0)

    if (res >=18.5 && res <= 29){
        document.getElementById("resultado").innerHTML= `<p class="paragraph" >Você está no peso ideal! Seu IMC é: ${res}<p>`

    }else if (res >= 30 && res <= 34.9){
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Você está com Obesidade Grau 1! Seu IMC é: ${res} <p>`

    }else if (res >= 35 && res <= 39.9){
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Você está com Obesidade Grau 2! Seu IMC é: ${res} <p>`

    }else if (res >= 40){
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Você está com Obesidade Grau 3! Seu IMC é: ${res} <p>`

    }else if (!peso){
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Peso Inválido<p>`
        return;

    }else if (!altura) {
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Altura Inválida<p>`
        return;

    }else{
        document.getElementById('resultado').innerHTML= `<p class="paragraph" >Você está Abaixo do Peso! Seu IMC é: ${res} <p>`
    }
        
}

