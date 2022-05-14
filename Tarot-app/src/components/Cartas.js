import React, {useState, useEffect} from 'react'
import cartasData from "../data/cartas.json";
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import html2canvas from "html2canvas";


const Cartas = () => {
    let urlImgs = "../assets/cartas/"; 
    let cartasId = [];     
    let showButton = false;
    const [cartaUno, setCartaUno] = useState([]);
    const [cartaDos, setCartaDos] = useState([]);
    const [cartaTres, setCartaTres] = useState([]);
    


    const sortearCarta = () => {  
        let numero = Math.floor(Math.random() * cartasData.length);        
        if(cartasId.length === 0){
            let carta = cartasData[numero];
            carta.turned = false;
            cartasId.push(numero);            
            return carta;
        } else {
            for(let i = 0; i < cartasId.length; i++){
                if(cartasId[i] === numero){
                    sortearCarta();
                } 
            }
            let carta = cartasData[numero];
            carta.turned = false;
            cartasId.push(numero);
            return carta;            
        }
    }

   const printDocument = () => {
        const input = document.getElementById('containerID');
        html2canvas(input)
          .then((canvas) => {
            document.body.appendChild(document.getElementById('target'));
            const imgData = canvas.toDataURL('image/jpg'); 
            let link = document.createElement("a");
            link.download = "cartas.jpg";
            link.href = imgData;
            link.click();          
          })
        ;
      }    

    useEffect(() => {
        let promesa = new Promise((resolve, reject) => {
            resolve(cartasData);
        });
        promesa.then(data => {
            setCartaUno(sortearCarta());
            setCartaDos(sortearCarta());
            setCartaTres(sortearCarta());    
        });
        cartasId = [];
    }, []);

    const handleClick = (cartaClick, divId) => {
        if(!cartaClick.turned) {
            cartaClick.turned = true;
            showButton = true;
            let divCarta = document.getElementById(divId);
            let div = document.createElement("div");
            div.className = "container text-center";
            let cardName = document.createElement("h1");
            let cardDesc = document.createElement("p");

            cardName.innerHTML = cartaClick.nombre;
            cardDesc.innerHTML = cartaClick.descripcion;

            div.appendChild(cardName);
            div.appendChild(cardDesc);
            
            return divCarta.appendChild(div);
        }
    }
        
    return (
        <Container id="containerID">
            <Row>
                <div className="d-flex justify-content-around"  >
                <Col>
                        <div className="container pb-4" id='cartaUno'>
                            <img                             
                            style={{width: "70%", height: "70%"}}
                            src={urlImgs + "fondo.jpg"}
                            onClick={e => {e.currentTarget.src = urlImgs + cartaUno.id + ".jpg";
                            handleClick(cartaUno, "cartaUno");}}
                                alt={cartaUno.nombre}
                                className="img-fluid mx-auto d-block"
                                >
                            </img>
                        </div>
                </Col>
                <Col >
                        <div className="container pb-4" id='cartaDos'>
                            <img  
                            style={{width: "70%", height: "70%"}}
                            src={urlImgs + "fondo.jpg"}
                            onClick={e => { e.currentTarget.src = urlImgs + cartaDos.id + ".jpg"; 
                                        handleClick(cartaDos, "cartaDos");}}
                                alt={cartasData.nombre}
                                className="img-fluid mx-auto d-block">
                            </img>
                        </div>
                </Col>
                <Col>
                        <div className="container pb-4" id='cartaTres'>
                        <img style={{width: "70%", height: "70%"}}
                            src={urlImgs + "fondo.jpg"}
                            onClick={e => {e.currentTarget.src = urlImgs + cartaTres.id + ".jpg";
                                        handleClick(cartaTres, "cartaTres");}}
                                alt={cartasData.nombre}
                                
                                className="img-fluid mx-auto d-block">
                            </img>                            
                        </div>
                </Col>

                </div>            
            </Row>
            <div id="pdf-btns" className='d-grid gap-2'>
                <button type="button" 
                className="btn btn-light btn-lg" id="get-pdf" onClick={printDocument}> Descargar como JPG </button>
            </div>
            <div id="target" style={{visibility: "hidden"}}>

            </div>
        </Container>
    ) 
                        
                    }


export default Cartas