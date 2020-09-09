import React, { useState, useEffect } from "react";

import ScrollAnimation from "react-animate-on-scroll";

import classes from "./style.module.css";

import GridOptions from "./gridOptions";
import LogoWhiteSmall from "../../components/misc/logoSmallWhite";

import mainImg from "../../assets/images/fotografia/main.jpg";

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
            <h1>—Portfolio—</h1>
            <h2>
              Photography is a way of feeling, of touching, of loving. What you
              have caught on film is captured forever. It remembers little
              things, long after you have forgotten everything.
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
