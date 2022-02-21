// let botaoEnviar = document.getElementById("botaoEnviar");
// let resultado = document.getElementById("resultado");

// botaoEnviar.addEventListener("click", validaFormulario);

// function validaFormulario () {

//     let inputPeso = document.getElementById('peso').value
//     let inputAltura = document.getElementById('altura').value.replace(',', '.') 

//     if (inputPeso !=='' && inputAltura !== ''){
//         let peso = parseFloat(inputPeso)
//         let altura = parseFloat(inputAltura)
//         let imc = (peso / Math.pow(altura,2)).toFixed(0)

//         if (imc >=18.5 && imc <= 29){
//             mensagem ('Você está no peso ideal! Seu IMC  ', imc )

//         }else if (imc >= 30 && imc <= 34.9){
//             mensagem ('Você está com Obesidade Grau 1! Seu IMC é', imc)

//         }else if (imc >= 35 && imc <= 39.9){
//             mensagem ('Você está com Obesidade Grau 2! Seu IMC é', imc)

//         }else if (imc >= 40){
//             mensagem ('Você está com Obesidade Grau 3! Seu IMC é', imc )

//         }else{
//             mensagem ('Você está Abaixo do Peso! Seu IMC é', imc)
//         }
//     }else{
//         alert('Por favor, Preencha todos os campos!')
//     }    
// }

// function mensagem(message, imc) {
//     resultado.innerHTML= `<p class="paragraph"> ${message} : ${imc}<p>`;
// }
let carros = [
    {
        nome: "Gol",
        marca: "volkswagem",
        km: 123644,
        cor: "preta",
        ano: 2013
    },
    {
        nome: "Mobi",
        marca: "fiat",
        km: 239156,
        cor: "branca",
        ano: 2016
    },
    {
        nome: "Celta",
        marca: "gm",
        km: 90000,
        cor: "vermelha",
        ano: 2012
    },
    {
        nome: "Fiesta",
        marca: "ford",
        km: 156234,
        cor: "vermelha",
        ano: 2012
    },
    {
        nome: "Focus",
        marca: "ford",
        km: 186234,
        cor: "vermelha",
        ano: 2008
    },
    {
        nome: "Onix",
        marca: "gm",
        km: 50000,
        cor: "branca",
        ano: 2017
    },
    {
        nome: "Fox",
        marca: "volkswagem",
        km: 202000,
        cor: "cinza",
        ano: 2011
    },
    {
        nome: "Toro",
        marca: "fiat",
        km: 200,
        cor: "cinza",
        ano: 2022
    }
];

// let carrosimplificado = carros.map(carro=>{
//     return{
//         marca: carro.marca,
//         cor: carro.cor
//     }
// });

// console.log(carrosimplificado)

let carrosimplificado = carros.map(carro=>{
    return{
        marca: carro.marca,
        ano: carro.ano
    }
});

console.log(carrosimplificado)
