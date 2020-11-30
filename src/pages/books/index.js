import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FiArrowDownCircle } from "react-icons/fi";

import classes from "./style.module.css";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";
import coverImg from "../../assets/images/books/cover.jpg";
import GridBooks from "./GridBooks";
import MessageSection from "../../components/messageSection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />
      <div className={classes.titles}>
        <ScrollAnimation animateIn="fadeInDown" duration={2}>
          <div className={classes.centeredAligned}>
            <h1>—Books—</h1>
            <h2>
              The world of writing from the perspective of a photographer.
            </h2>
            <br />
            <br />
            <span className={classes.fadeArrow}>
              <AnchorLink href="#anchorToGo">
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
      <div className={classes.imgContainer}>
        <img src={coverImg} />
      </div>
      <div className={[classes.centeredAligned, classes.backColor].join(" ")}>
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          {/* <div className={classes.backColorDarker}> */}
          <div className={classes.containerContact}>
            <div id="anchorToGo" style={{ position: "absolute", top: "0px" }} />
            <GridBooks background="whiteBack" />
            <br />
          </div>
          {/* </div> */}
        </ScrollAnimation>
      </div>
      {/* <hr /> */}
      <MessageSection
        background="greyLightBack"
        text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        author='"Bill Brandt"'
      />
      {/* <hr /> */}
      <Footer />
    </>
  );
}
