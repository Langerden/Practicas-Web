import React, { useState, useEffect } from "react";
import zodiaco from "../data/zodiaco.json";

function DetalleSigno(props) {
  const [caracSigno, setCaracSigno] = useState([]);
  let urlImgs = "../assets/signos/";  

  useEffect(() => {
    setCaracSigno(zodiaco[props.signo]);
  }, [props.signo]);

  return (
    <div className="container">
    <div className="container pb-4">
          <img src={urlImgs + caracSigno.imagen}
            alt={caracSigno.signo}                                        
            className="img-fluid mx-auto d-block"
            style={{width: "150px", height: "150px"}}>
          </img>
    </div>
        <div className="row">
          <div>
            <h1 className="text-center pb-2">{caracSigno.signo}</h1>
            <div className="container mx-3" style={{display: "flex"}}>
                <h5 className="mx-2">Elemento: </h5 > <h5 className="me-5">{caracSigno.elemento}</h5>
                <h5 className="mx-2">Color: </h5 > <h5 className="me-5">{caracSigno.color}</h5>
                <h5 className="mx-2">Numero de la Suerte: </h5> <h5>{props.numSuerte}</h5>
            </div>
            <p className="text-center">{caracSigno.caracteristicas}</p>

          </div>
        </div>
      </div>
    );
}

export default DetalleSigno;
