import React from "react";
// npm i react-router-hash-link
import { NavHashLink } from "react-router-hash-link";

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

import classes from "./style.module.css";

import fotografia from "../../assets/images/GridOptions/fotografia.jpg";
import livros from "../../assets/images/GridOptions/livros.jpg";
import series from "../../assets/images/GridOptions/series.jpg";
import workshop from "../../assets/images/GridOptions/workshop.jpg";
import biografia from "../../assets/images/GridOptions/biografia.jpg";
import contato from "../../assets/images/GridOptions/contato.jpg";

export default function GripOption() {
  return (
    <>
      <div className={classes.AppContainer}>
        <br /> <br />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={0.8}>
          <div className={classes.paddingLateral}>
            <h1>Luiz Lima</h1>
            <h2>A life dedicated to photography art</h2>
          </div>
        </ScrollAnimation>
        <br /> <br />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
          <div className={classes.GridContainer}>
            <div className={classes.item1}>
              <h3>Photography</h3>
              <NavHashLink to="/photography#start">
                <img className={classes.imageFrame} src={fotografia} alt="" />
              </NavHashLink>
            </div>
            <div className={classes.item2}>
              <h4>Books</h4>
              <NavHashLink to="/books#start">
                <img className={classes.imageFrame} src={livros} alt="" />
              </NavHashLink>
            </div>
            <div className={classes.item3}>
              <h4>Series</h4>
              <NavHashLink to="/series#start">
                <img className={classes.imageFrame} src={series} alt="" />
              </NavHashLink>
            </div>
            <div className={classes.item4}>
              <h3>Workshop</h3>
              <NavHashLink to="/workshop#start">
                <img className={classes.imageFrame} src={workshop} alt="" />
              </NavHashLink>
            </div>
            <div className={classes.item5}>
              <h4>Biography</h4>
              <NavHashLink to="/biography#start">
                <img className={classes.imageFrame} src={biografia} alt="" />
              </NavHashLink>
            </div>
            <div className={classes.item6}>
              <h4>Contact</h4>
              <NavHashLink to="/contact#start">
                <img className={classes.imageFrame} src={contato} alt="" />
              </NavHashLink>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
