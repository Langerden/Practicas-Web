function setColor(idInput) {
    idInput.style.background = 'lightgreen';
}

function removeColor(idInput) {
    idInput.style.background = 'white';
}

function showSum() {
    const forma = document.getElementById('forma');    //Obtengo el formulario
    let opA = forma['opA']; //Obtengo el elemento del formulario con el id
    let opB = forma['opB']; 
    let result = parseInt(opA.value) + parseInt(opB.value);
    isNaN(result) ? document.getElementById('resultado').innerHTML = 'Faltó ingresar numeros' : 
    document.getElementById('resultado').innerHTML = `El resultado es ${result}`; //Setteo el valor al input de result
}