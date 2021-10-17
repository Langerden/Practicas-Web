function calcular() {
    const cantidad = document.getElementById('cantidad').value;
    if(Number(cantidad) > 0 ) {
        return cantidad * 200;        
    } else {
        alert('Ingrese una cantidad mayor a 0');        
    }
}

function getOption(monto){    
    let valorTotal = 0;
    const opcionElegida = document.getElementById('categoria').value;    
        switch ( Number(opcionElegida)) {
            case 1:            
                valorTotal = monto * 0.2;
                break;
            case 2:
                valorTotal = monto * 0.5;
                break;
            case 3:
                valorTotal = monto * 0.85;            
                break;         
    }
    return valorTotal;
}

function setTotal(){
    const total = document.getElementById('pago');
    let montoTotal = getOption(calcular());
    if(montoTotal > 0){
        total.innerHTML = 'Total a Pagar: $' + montoTotal;
    }
    
}

function clearValues(){
    const constrols = Array.from(document.getElementsByClassName('form-control'));
    constrols.forEach(element => { element.value = ''; });

    const select = document.getElementById('categoria');
    select.selectedIndex = 0;

    document.getElementById('pago').innerHTML = 'Total a Pagar: $';

}