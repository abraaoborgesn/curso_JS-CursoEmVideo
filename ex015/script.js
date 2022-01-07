function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'criança-homem.jpg')
                img.style.border = '10px ridge blue'

            } else if(idade>=10 && idade<21){
                // jovem
                img.setAttribute('src', 'jovem-homem.jpg')
                img.style.border = '10px ridge blue'

            } else if(idade < 50){
                // adulto
                img.setAttribute('src', 'adulto-homem.jpg')
                img.style.border = '10px ridge blue'

            } else{
                // idoso
                img.setAttribute('src', 'idoso-homem.jpg')
                img.style.border = '10px ridge blue'

            }
        }  else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                // criança
                img.setAttribute('src', 'criança-mulher.jpg')
                img.style.border = '10px ridge pink'
            } else if(idade <18){
                // jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
                img.style.border = '10px ridge pink'
            } else if(idade <50){
                // adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
                img.style.border = '10px ridge pink'
            } else{
                // idoso
                img.setAttribute('src', 'idoso-mulher.jpg')
                img.style.border = '10px ridge pink'
            }
        }
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade} anos</strong>.`
        res.style.textAlign = 'center' // centralizar o resultado em JS
        img.style.height = '400px'
        img.style.width = '400px'
        
        res.appendChild(img)
    }

}