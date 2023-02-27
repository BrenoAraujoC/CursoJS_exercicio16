function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value == "" | fim.value == "" | passo.value == "") {
        res.innerHTML = "Faltam dados! Impossível contar!"
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            alert('Considerando PASSO = 1.')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }

        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}