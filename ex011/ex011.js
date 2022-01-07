var idade = 54
console.log(`Você tem ${idade} anos`)
if(idade<18){
    if(idade>=16){
        console.log(`Voto opcional`)
    } else{
    console.log(`Não vota`)
    }
} else if(idade>=65){
    console.log(`Voto opcional`)
} else{
    console.log(`Voto obrigatório`)
}