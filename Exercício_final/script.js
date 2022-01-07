let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // limpa o resultado quando quiser refazer o teste sem atualizar a pagina
    }
 else{
    alert('Valor inválido ou já encontrado na lista.')
    }
    num.value=''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        let total = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> número cadastrados</p>`

        valores.sort((a, b) => a - b)
        let ultimo = valores[valores.length-1]
        let primeiro = valores[0]
        res.innerHTML += `<p>O maior valor informado foi <strong>${ultimo}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${primeiro}</strong></p>`

        let soma = valores.reduce((total,currentElement) => total + currentElement)
        res.innerHTML += `<p>A soma é <strong>${soma}</strong></p> `

        let media = ''
        media =  soma/total
        res.innerHTML +=`<p>A média é <strong>${media}</strong>.`
          
    }

}

function resetar(){
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
}