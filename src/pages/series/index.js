import React, { useState, useEffect } from "react";

// npm i react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";

import classes from "./style.module.css";

import GridOptions from "./gridOptions";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";

import mainImg from "../../assets/images/series/series.jpg";

export default function Fotografia() {
  const [listener, setListener] = useState(null);
  const [status, setStatus] = useState("top");

  useEffect(() => {
    setListener(
      document.addEventListener("scroll", (e) => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 10) {
          if (status !== "down") {
            setStatus("down");
          }
        } else {
          if (status !== "top") {
            setStatus("top");
          }
        }
      })
    );
  }, [listener, status]);

  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />
      <LogoWhiteSmall />
      <div
        style={{
          opacity: status === "top" ? "1" : "0",
        }}
        className={classes.titles}
      >
        <ScrollAnimation animateIn="fadeInDown" duration={2}>
          <div className={classes.centeredAligned}>
            <h1>—Series—</h1>
            <h2>
              Photography for me is not looking, it’s feeling. If you can’t feel
              what you’re looking at, then you’re never going to get others to
              feel anything when they look at your pictures.
            </h2>
          </div>
        </ScrollAnimation>
      </div>

      {/* DESKTOP ONLY with SCROLL CHANGE BRIGHTNESS: */}
      <div
        style={{
          filter: status === "top" ? "brightness(30%)" : "brightness(90%)",
        }}
        className={[classes.MobileDontShow, classes.backgroundOnScroll].join(
          " "
        )}
      >
        <div
          className={classes.mainIgmDiv}
          style={{ backgroundImage: `url(${mainImg})` }}
        ></div>
        {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={0.1}> */}
        <GridOptions />
        {/* </ScrollAnimation> */}
      </div>
      {/* MOBILE ONLY: */}
      <div className={[classes.MobileOnly, classes.backgroundMobile].join(" ")}>
        <div
          className={classes.mainIgmDiv}
          style={{ backgroundImage: `url(${mainImg})` }}
        ></div>
        <GridOptions />
      </div>
    </>
  );
}
