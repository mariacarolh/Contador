function Calcular() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Verifique os dados!")
    } else {
        resultado.style.color = 'red'
        resultado.innerHTML = "\u{1F437} O resultado é: "

        // iniciando a conversao para number e resgatando os dados do formulário, após, a nova varíavel recebe os valores. 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // O contador começa no Inicio (valor de i). Enquanto o contador for menor ou iguaL ao valor final, será incrementado o contador + o passo.
        for (let contador = i; contador <= f; contador += p) {
            resultado.innerHTML += ` ${contador} ` 
        }
    }
}