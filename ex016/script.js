function verificar(){
    let ini = document.getElementById('início')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
  
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i<f){
        //contagem crescente

            for(let c = i;c<=f;c+=p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
        } else if(f<i){
        //contagem regressiva
         
            for(let c = i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}