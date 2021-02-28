function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    let lea = document.getElementById('lea')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       res.innerHTML = 'Impossivel contar'
        // window.alert('[ERRO] falatam dados! ')
      
    } else{
        res.innerHTML = 'contando: <br> '
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('passo invalido! considerando passo 1 ')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            lea.innerHTML +=`\u{1F9D4}`
        }
        res.innerHTML +=`\u{1F3C1}`
        
    }
}