function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0 ){
        window.alert('Por favor, digite algum numero')
        
    } else {
        var n = Number(num.value)
        var c = 1 
        tab.innerHTML = '' // antes de fazer a proxima, limpar a primeira tab
        while(c <= 10){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `value${c}`
            tab.appendChild(item)
            c++
        }
       
    }
    

   
}