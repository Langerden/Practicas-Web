import html2canvas from "html2canvas";
import React, {useState} from 'react'
import { Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Horoscopo from "./Horoscopo";
import DetalleSigno from "./DetalleSigno";
import Cartas from "./Cartas";

function FormDiv() {
const  urlImgs = "../assets/signos/";
const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [genero, setGenero] = useState("");
const [edad, setEdad] = useState("");
const [fechaNacimiento, setFechaNacimiento] = useState("");
const [idSigno, setSigno] = useState(0);
const [numSuerte, setNumSuerte] = useState(0);
const [mostrarSigno, setMostrarSigno] = useState(false);
const [mostrarCartas, setMostrarCartas] = useState(false);

  const getNombre = (e) => {
    setNombre(e.target.value);
    let largoNombre = e.target.value.length;
    setNumSuerte(largoNombre);
  };

  const getGenero = (e) => {
    setGenero(e.target.value);
  };

const getEdad = (e) => {
 setEdad(e.target.value);
};

  const getFechaNacimiento = (e) => {
    setFechaNacimiento(new Date(e.target.value));
    let mes = parseInt(e.target.value.split("-")[1]);
    let dia = parseInt(e.target.value.split("-")[2]);
    setSigno(buscarSigno(mes, dia));
  };
  
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    setMostrarSigno(true);
    setMostrarCartas(false);
  };

  const ClickCartas = (e) => {    
    e.preventDefault();
    setMostrarCartas(true);
    setMostrarSigno(false);    
}

const printDocument = () => {
    const input = document.getElementById('containerID');
    html2canvas(input)
      .then((canvas) => {
        document.body.appendChild(document.getElementById('target'));
        const imgData = canvas.toDataURL('image/pdf'); 
        let link = document.createElement("a");
        link.download = "horoscopo.jpg";
        link.href = imgData;
        link.click();          
      })
    ;
  }   

  const buscarSigno = (mes, dia) => {
    let signo = 0;
    if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) signo = 0;
    if ((dia >= 24 && mes === 9) || (dia <= 23 && mes === 10)) signo = 6;
    if ((dia >= 21 && mes === 4) || (dia <= 21 && mes === 5)) signo = 1;
    if ((dia >= 24 && mes === 10) || (dia <= 22 && mes === 11)) signo = 7;
    if ((dia >= 22 && mes === 5) || (dia <= 21 && mes === 6)) signo = 2;
    if ((dia >= 23 && mes === 11) || (dia <= 21 && mes === 12)) signo = 8;
    if ((dia >= 21 && mes === 6) || (dia <= 23 && mes === 7)) signo = 3;
    if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) signo = 9;
    if ((dia >= 24 && mes === 7) || (dia <= 23 && mes === 8)) signo = 4;
    if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) signo = 10;
    if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) signo = 5;
    if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) signo = 11;
    console.log(signo);
    return signo;
  };

    return (
        <Container className="p-3 ">
            <h1 className="text-center">Servicio de Astrología Online</h1>
            <p className="text-center"> ¿Te gustaria conocerte un poco mas? ¿Te gustaría saber quien sos y que te depara el futuro? La luna te lo dirá todo</p>
            <Container className="p-4 mb-4 rounded-3 form">
                <h3 style={{ display: 'flex', justifyContent: 'center' }}> Déjanos conocerte un poco más </h3>
                <div style={{ padding: '10px 20px' }}>
                    <Form className='form' onSubmit={enviarFormulario}>
                        < Row className="mb-3">
                            <Col>
                                <Form.Group controlId="formName" className='controlForm'>
                                    <FloatingLabel controlId="floatingName" label="Nombre completo" className="mb-6" >
                                    <Form.Control onChange={getNombre} type="text" placeholder='Nombre Completo' />
                                    </FloatingLabel>
                                </Form.Group>                            
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                    <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-2" >
                                        <Form.Control  onChange={getEmail}
                                            type="email"
                                            placeholder="Enter email"
                                            />
                                    </FloatingLabel>
                                </Form.Group>                        
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="floatingGenero">
                                    <Form.Select size="lg"  onChange={getGenero}>
                                        <option disabled>Genero</option>
                                        <option value="1">Femenino</option>
                                        <option value="2">Masculino</option>
                                        <option value="3">Otros</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formAge" >
                                    <FloatingLabel controlId="floatingAge" label="Edad" >
                                        <Form.Control  onChange={getEdad} type="number" placeholder='Edad' />
                                    </FloatingLabel>
                                </Form.Group>         
                            </Col>

                            <Col>
                            <Form.Group controlId="floatingDate" >
                                <FloatingLabel controlId="floatingBirthdate" label="Fecha de Nacimiento" >
                                    <Form.Control  onChange={getFechaNacimiento} type="date" placeholder='Fecha de Nacimiento' />
                                </FloatingLabel>      
                            </Form.Group>                      
                            </Col>
                        </Row>
                        
                        <div className="d-grid gap-2 mt-4">
                            <Button variant="light" type="submit" size="lg"> Mostrar Horoscopo </Button>                           
                            <Button onClick={ClickCartas}  type="submit" className="mt-3" variant="light" size="lg"> Tirar Cartas </Button>
                        </div>
                    </Form>
                </div>

            </Container>

                <div className="d-grid gap-2 mt-4">
                        {mostrarCartas ? <Cartas /> : null}
                </div>

            { nombre !== "" && mostrarSigno && (
                <Container className="p-4 mb-4" id="containerID">                    
                    <DetalleSigno signo={idSigno} numSuerte={numSuerte} />
                    <Horoscopo signo={idSigno} />
                
                </Container> )} 
                { nombre !== "" && mostrarSigno && (
                <Container>
                    <div id="pdf-btns" className='d-grid gap-2'>
                            <button type="button" 
                            className="btn btn-light btn-lg" id="get-pdf" onClick={printDocument}> Descargar como JPG  </button>
                        </div>
                        <div id="target" style={{visibility: "hidden"}}>

                    </div>
                </Container>
      )}
    </Container>
    )
}

export default FormDiv