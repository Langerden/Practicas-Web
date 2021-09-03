const persons = [
    new Persona('Denise', 'Langer'),
    new Persona('Melanie', 'Langer'),
    new Persona('Juan', 'Alvarez')
];

function mostrarPersonas(){
    console.log('Mostrar');
    let auxText = '';
    persons.forEach(p => auxText += `<li>${p.nombre} ${p.apellido}</li>`);
    document.getElementById('persona').innerHTML = auxText;
}

function agregarPersonas(){
    const forma = document.getElementById('forma');
    let nombre = forma['nombre'];
    let apellido = forma['apellido'];
    if (nombre.value && apellido.value) {
        let persona = new Persona(nombre.value, apellido.value);
        persons.push(persona);
        this.mostrarPersonas();
    }
    forma['nombre'].value = '';
    forma['apellido'].value = '';
}