import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import classes from "./style.module.css";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";
import imgMain from "../../assets/images/workshop/main.jpg";
import Workshop from "./workshop";
import TextDown from "../../components/textDown";
import MessageSection from "../../components/messageSection";

export default function Home() {
  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />
      <TextDown
        title="—Workshop—"
        texta="Anything that gives us new knowledge gives us an opportunity to be more rational."
        // textb="Be invited to know a little of my trajectory."
      />
      <div className={classes.imgContainer}>
        <img src={imgMain} />
      </div>
      <div className={classes.centeredAligned}>
        <div
          id="anchorPoint"
          style={{ position: "absolute", marginTop: "-20px" }}
        />
        <ScrollAnimation animateIn="fadeIn" duration={3}>
          {/* <div className={classes.backColorDarker}> */}
          <Workshop />
          <br />
          {/* </div> */}
        </ScrollAnimation>
      </div>
      <MessageSection
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Beauty can be seen in all things, seeing and composing the beauty is what separates the snapshot from the photograph."
        author='"Matt Hardy"'
      />
    </>
  );
}
