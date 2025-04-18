function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var img = window.document.getElementById('img')
    var horario = window.document.getElementById('horario')

    var hora = 9
    horario.innerHTML = `Agora são ${hora} horas`
    if (hora > 18 || hora < 6) {
        img.innerHTML = '<img src="noite.png" alt="Imagem de Noite"></img>'
        document.body.style.background = '#515154'
    } else if (hora >= 12 && hora <= 18){
        img.innerHTML = '<img src="tarde.png" alt="Imagem de Tarde"></img>'
        document.body.style.background = '#b9846f'
    } else {
        img.innerHTML = '<img src="dia.png" alt="Imagem de Manhã"></img>'
        document.body.style.background = '#e2cd9f'
    }
}