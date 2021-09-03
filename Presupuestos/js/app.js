const ingresos = [
    new Ingreso('Salario', 5400),
    new Ingreso('Venta', 5400)
];
const egresos = [
    new Egreso('Alquiler', 7500),
    new Egreso('Jueguitos', 1000)
];

function loadHeader() {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentaje = totalEgresos() / totalIngresos();
    
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML =  formatoMoneda(totalEgresos());
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentaje);
    
}

let totalIngresos = () => {
    let total = 0;
    ingresos.forEach(ing => {
        total += ing.valor;
    });    
    return total;
}

let totalEgresos = () => {
    let total = 0;
    egresos.forEach(eg => {
        total += eg.valor;  
    }); 
    return total;
}

function formatoMoneda(valor){
    return valor.toLocaleString('es-ES', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2});
}

function formatoPorcentaje(valor){
    return valor.toLocaleString('es-ES', {style: 'percent', minimumFractionDigits: 2});
}

function loadApp () {
    loadHeader();
    cargarIngresos();
    cargarEgresos();
}

function cargarIngresos(){
    let ingresosHtml = '';
    ingresos.forEach(ing => {
        ingresosHtml += crearIngreso(ing);
    });
    document.getElementById('lista-ingresos').innerHTML = ingresosHtml;
}


function cargarEgresos(){
    let egresosHtml = '';
    egresos.forEach(ing => {
        egresosHtml += crearEgreso(ing);
    });
    document.getElementById('lista-egresos').innerHTML = egresosHtml;
}

function crearIngreso(ingreso){
    let ingresoHTML = 
            `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.desc}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline" 
                                onclick="eliminarRegistroIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>                        
                    </div>
                </div>`;

    return ingresoHTML;
}

function eliminarRegistroIngreso(id){
    let index = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(index, 1);
    loadHeader();
    cargarIngresos();
}

function eliminarRegistroEgreso(id){
    let index = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(index, 1);
    loadHeader();
    cargarEgresos();
}

function crearEgreso(egreso){
    let egresoHTML = 
            `<div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.desc}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"
                        onclick="eliminarRegistroEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>                        
            </div>
        </div>`;
    return egresoHTML;
}

function agregarDato(){
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let description = forma['descripcion'];
    let valor = forma['valor'];
    if(description.value !== '' && valor.value !== '') {
        if(tipo.value === 'ingreso') {
            ingresos.push(new Ingreso(description.value, Number(valor.value)));
            loadHeader();
            cargarIngresos();
        } else if (tipo.value === 'egreso') {
            egresos.push(new Egreso(description.value, Number(valor.value)));
            loadHeader();
            cargarEgresos();
        }
    }
}