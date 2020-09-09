import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FiArrowDownCircle } from "react-icons/fi";

import classes from "./style.module.css";

export default function Home(props) {
  return (
    <div className={classes.titles}>
      <ScrollAnimation
        animateIn="fadeInDown"
        initiallyVisible={true}
        duration={2}
      >
        <div className={classes.centeredAligned}>
          <h1>{props.title}</h1>
          <h2>
            {props.texta}
            <br />
            {props.textb}
          </h2>
          <br />
          <br />
          <span className={classes.fadeArrow}>
            <AnchorLink href="#anchorPoint">
              <FiArrowDownCircle
                // className={classes.EmailLog}
                color="white"
                size={40}
              />
            </AnchorLink>
          </span>
        </div>
      </ScrollAnimation>
    </div>
  );
}
