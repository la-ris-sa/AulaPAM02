function calcIMC(){
    var imc = 0, massa = 0, altura = 0, nome;

    massa = Number(document.getElementById('massa').value)
    altura = Number(document.getElementById('altura').value)
    nome = document.getElementById('nome').value

    imc = massa / (altura * altura)

    var result = verificaIMC(imc);

    document.getElementById('res').innerHTML = 'Olá, '+nome+'. Seu IMC é de: '+imc.toFixed(2)+'<br>'+result
}
function verificaIMC(imc){
    if(imc <= 18.5){
        return "Baixo peso"
    }else if(imc >= 18.6 && imc <= 24.9){
        return "Peso normal"
    }else if(imc >= 25 && imc <= 29.9){
        return "Sobrepeso"
    }else if(imc >= 30 && imc <= 34,9){
        return "Obesidade grau I"
    }else if(imc >= 35 && imc <= 39,9){
        return "Obesidade grau II"
    }else if(imc >= 40){
        return "Obesidade grau III"
    }
}