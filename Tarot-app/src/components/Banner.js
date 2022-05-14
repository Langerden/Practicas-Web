import React from 'react'
import {Carousel} from 'react-bootstrap';

function Banner() {
  let urlImgs = "../assets/banner";
  return (
    <div>
        <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {urlImgs + 1 + ".jpg"}
            height="500"
            alt="First slide"
          />
          <Carousel.Caption>            
            <h3>Luna Magica</h3>
            <p>¿Sabes qué caracteristicas tiene tu personalidad? ¿Sabes que te depara tu futuro?</p>
            <p>La luna te dará una guía para tu vida </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="500"
            src= {urlImgs + 2 + ".jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Luna Magica</h3>
          <p>¿Sabes qué caracteristicas tiene tu personalidad? ¿Sabes que te depara tu futuro?</p>
            <p>La luna te dará una guía para tu vida </p>          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {urlImgs + 3 + ".jpg"}
            height="500"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Luna Magica</h3>
            <p>¿Sabes qué caracteristicas tiene tu personalidad? ¿Sabes que te depara tu futuro?</p>
            <p>La luna te dará una guía para tu vida </p>            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner