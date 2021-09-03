const mostrarReloj = () => {
    let today = new Date();
    let hr = formatHour(today.getHours());
    let min = formatHour(today.getMinutes());
    let seg = formatHour(today.getSeconds());
    document.getElementById('hour').innerHTML = `${hr}:${min}:${seg}`;

    const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let diaSem = days[today.getDay()];            
    let completeMonth = month[today.getMonth()];
    let fechaText = `${diaSem}, ${today.getDate()} de ${completeMonth}`;
    document.getElementById('date').innerHTML = fechaText;


    //Devuelve la lista de todos los estilos que se aplican
    //toggle: si se aplica el estilo, deja de aplicarlo y si no, lo aplica. Aplica el estilo y deja de aplicarlo
    document.getElementById('container').classList.toggle('animar');
}



const formatHour = (hora) => {
    if(hora < 10){
        hora = '0' + hora
    }
    return hora;
}

setInterval(mostrarReloj, 1000);