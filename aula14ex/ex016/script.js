function contar() {
    var init = document.getElementById('init')
    var end = document.getElementById('end')
    var pace = document.getElementById('pace')
    var res = document.getElementById('res')

    var i = Number(init.value)
    var e = Number(end.value)
    var p = Number(pace.value)
    
    if (i < e) {
        for(let c = i; c <= e; c += p) {
            res.innerHTML += `${c} 👉`
        }
    } else {
        for(let c = i; c >= e; c -= p) {
            res.innerHTML += `${c} 👉`
        }
    }
    res.innerHTML += '🏁'
}