function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os Dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem-pequeno.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher-pequena.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}