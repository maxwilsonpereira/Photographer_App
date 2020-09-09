import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import classes from "./style.module.css";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";
import biographyImg from "../../assets/images/biography.jpg";
import Biography from "./biography";
import TextDown from "../../components/textDown";
import SocialMedias from "../../components/socialMedias";

export default function Home() {
  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />
      <TextDown
        title="—Biography—"
        texta="Experience comes with time and dedication."
        textb="Be invited to know a little of my trajectory."
      />
      <div className={classes.imgContainer}>
        <img src={biographyImg} />
      </div>
      <div
        // id="anchorPoint"
        className={classes.centeredAligned}
      >
        <div
          id="anchorPoint"
          style={{ position: "absolute", marginTop: "-20px" }}
        />
        <ScrollAnimation animateIn="fadeIn" duration={3}>
          {/* <div className={classes.backColorDarker}> */}
          <Biography />
          <br />
          {/* </div> */}
        </ScrollAnimation>
      </div>
      <SocialMedias
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Get in touch with me through my social medias:"
      />
    </>
  );
}
