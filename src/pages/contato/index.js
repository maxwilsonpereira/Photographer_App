import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FiArrowDownCircle } from "react-icons/fi";

import classes from "./style.module.css";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";
import contactImg from "../../assets/images/contact.jpg";
import Contato from "../../components/contato";
import TextDown from "../../components/textDown";
import SocialMedias from "../../components/socialMedias";

export default function Home() {
  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />

      <TextDown
        title="—Contact—"
        texta="Photographing is more than a job, it's a passion!"
        textb="Get in touch via form, email or phone."
      />

      <div className={classes.imgContainer}>
        <img src={contactImg} />
      </div>

      <div className={[classes.containerMain, classes.backColor].join(" ")}>
        {/* <div className={classes.backColorDarker}> */}
        <div className={classes.containerContact}>
          <div id="anchorPoint" style={{ position: "absolute", top: "0px" }} />
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            <Contato title="Luiz Lima" />
            <br />
          </ScrollAnimation>
        </div>
      </div>
      <SocialMedias
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Get in touch with me through my social medias:"
      />
    </>
  );
}
