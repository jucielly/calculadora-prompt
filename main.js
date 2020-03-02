let nomeUsuario = prompt("Olá, qual o seu nome?")
let saudacao = document.getElementById("bem-vindo")
saudacao.innerHTML = `Seja Bem Vindo ${nomeUsuario}!`

let continuar = prompt("Gostaria de Continuar ? \n Digite sim ou não")

if(continuar === "sim"){
    let soma = document.getElementById("operacao-soma")
    let subtracao = document.getElementById("operacao-subtracao")
    let divisao = document.getElementById("operacao-divisao")
    let multiplicacao = document.getElementById("operacao-multiplicacao")

    let vamoSomar1 = prompt("VAMOS SOMAR!\n digite um numero:")
    vamoSomar1 = parseFloat(vamoSomar1)
    let vamoSomar2 = prompt("VAMOS SOMAR!\n Digite Outro numero:")
    vamoSomar2 = parseFloat(vamoSomar2)
    soma.innerHTML = `O resultado da soma entre o  numero ${vamoSomar1} e o ${vamoSomar2} é: ${vamoSomar1+vamoSomar2}`

    let vamoSubtrair1 = prompt("VAMOS SUBTRAIR!\n digite um numero:")
    vamoSubtrair1 = parseFloat(vamoSubtrair1)
    let vamoSubtrair2 = prompt("VAMOS SUBTRAIR!\n Digite Outro numero:")
    vamoSubtrair2 = parseFloat(vamoSubtrair2)
    subtracao.innerHTML = `O resultado da subtração do numero ${vamoSubtrair1} menos o ${vamoSubtrair2} é: ${vamoSubtrair1-vamoSubtrair2}`

    let vamoDividir1 = prompt("VAMOS DIVIDIR!\n digite um numero:")
    vamoDividir1 = parseFloat(vamoDividir1)
    let vamoDividir2 = prompt("VAMOS DIVIDIR!\n Digite Outro numero:")
    vamoDividir2 = parseFloat(vamoDividir2)
    divisao.innerHTML = `O resultado da divisao do  numero ${vamoDividir1} pelo numero ${vamoDividir2} é: ${vamoDividir1/vamoDividir2}`


    let vamoMultiplicar1 = prompt("VAMOS MULTIPLICAR!\n digite um numero:")
    vamoMultiplicar1 = parseFloat(vamoMultiplicar1)
    let vamoMultiplicar2 = prompt("VAMOS MULTIPLICAR!\n Digite Outro numero:")
    vamoMultiplicar2= parseFloat(vamoMultiplicar2)
    multiplicacao.innerHTML = `O resultado da multiplicação entre o  numero ${vamoMultiplicar1} e o ${vamoMultiplicar2} é: ${vamoMultiplicar1*vamoMultiplicar2}`




}else{
    alert("teste Cancelado!")
}