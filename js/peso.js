

const calcularPeso = () =>{
    let masa = document.querySelector('#floatingInput').value
    const gravedadLunar = 1.6
    const gravedadTierra = 9.8
    const gravedadMarte = 3.7
    let RegExr = /^[1-9]*(\.?)[ 1-9]+$/

    let ok = RegExr.test(masa)
 
    let tierra = masa*gravedadTierra
    let marte = masa*gravedadMarte
    let luna = masa*gravedadLunar

    if (ok==false) {
        alert('Caracter invalido')
    }else{
        document.getElementById('lunare').innerHTML = "<img src=luna.jpg>"+"<br>"+luna        
        document.getElementById('tierrare').innerHTML = "<img src=tierra.jpg>"+"<br>"+ tierra   
        document.getElementById('martere').innerHTML = "<img src=marte.png>"+"<br>"+marte  
    }
}

const boton = document.querySelector('#calcular')
boton.addEventListener('click',calcularPeso)
