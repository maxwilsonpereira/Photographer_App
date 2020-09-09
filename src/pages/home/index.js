import React, { useState, useEffect } from "react";

// CrossFadeImage: Just add file crossFadeImg.js and import it:
import CrossFadeImage from "./crossFadeImg";

// Background Slideshow:
// https://www.cssscript.com/css-only-crossfading-background-slideshow/

import classes from "./style.module.css";

import GridOptions from "../../components/GridOptions";
import MessageSection from "../../components/messageSection";
import TextDown from "../../components/textDown";

// import LuizLogoBlack from "../../components/misc/logoBlack";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";
import home1 from "../../assets/images/home/home1.jpg";
import home2 from "../../assets/images/home/home2.jpg";
import home3 from "../../assets/images/home/home3.jpg";
import home4 from "../../assets/images/home/home4.jpg";
import home5 from "../../assets/images/home/home5.jpg";

const images = [home1, home2, home3, home4, home5];

export default function Home() {
  const [curImage, setCurImg] = useState(home1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurImg(images[count]);
      setCount(count + 1);
    }, 5000);
    if (count === 5) {
      setCount(0);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [curImage, count]);

  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />
      <TextDown
        title="—Welcome—"
        texta="Because photographing is more than a job, it's a duty and a passion!"
        textb=""
      />
      {/* HOME IMAGE */}
      <CrossFadeImage
        containerClass={classes.imgContainer}
        src={curImage}
        duration={2000}
        // linear / ease-out / ease-in
        timingFunction={"ease-in-out"}
      />
      <div id="anchorPoint" />
      {/* <div className={classes.backColorDarker}> */}
      <GridOptions />
      <br />
      {/* </div> */}
      <MessageSection
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="A photographer must possess and retain the receptive faculties of a child who watches the world for the first time."
        author='"Ansel Adams"'
      />
    </>
  );
}
