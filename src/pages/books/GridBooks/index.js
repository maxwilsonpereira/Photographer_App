import React, { useState } from "react";
// npm i react-router-hash-link
// import { NavHashLink } from "react-router-hash-link";

import ScrollAnimation from "react-animate-on-scroll";
/*
// YOU CAN USE THE ANIMATIONS FROM:
// https://animate.style/
// EXAMPLES: zoomIn /zoomInLeft / fadeOutDown / pulse
ADD TO index.HTML <head> ... </head>:
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
*/
// EXAMPLES:
// https://dbramwell.github.io/react-animate-on-scroll/

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import classes from "./style.module.css";

import rodasImg from "../../../assets/images/books/rodas.jpg";
import contosImg from "../../../assets/images/books/contos.jpg";
import Contos from "./contos";
import Rodas from "./rodas";

export default function GripOption() {
  const [contosAux, setContosAux] = useState(null);
  const [rodasAux, setRodasAux] = useState(null);

  function printContos(e) {
    e.preventDefault();
    setRodasAux(null);
    setContosAux(<Contos />);
  }
  function printRodas(e) {
    e.preventDefault();
    setContosAux(null);
    setRodasAux(<Rodas />);
  }
  return (
    <>
      <div className={classes.AppContainer}>
        <br /> <br />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={0.8}>
          <div className={classes.paddingLateral}>
            {/* <h1>Luiz Lima</h1> */}
            <h1>Art as an instrument of social awareness</h1>
          </div>
        </ScrollAnimation>
        <br /> <br />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
          <div id="anchorPoint" className={classes.GridContainer}>
            <AnchorLink href="#anchorPoint">
              <div onClick={printContos}>
                <img className={classes.imageFrame} src={contosImg} />
              </div>
            </AnchorLink>
            <AnchorLink href="#anchorPoint">
              <div onClick={printRodas}>
                <img className={classes.imageFrame} src={rodasImg} />
              </div>
            </AnchorLink>
          </div>
        </ScrollAnimation>
        {/* ANCHOR self-closing DIV: */}
        <div
          // id="anchorPoint"
          style={{ position: "absolute", marginTop: "-20px" }}
        />
        {contosAux}
        {rodasAux}
      </div>
    </>
  );
}
