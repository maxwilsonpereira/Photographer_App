import React from "react";

import classes from "./style.module.css";

export default function Fotografia(props) {
  return (
    <>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />

      <div className={classes.GridContainer}>
        <div className={classes.item1}>
          <img className={classes.imageFrame} src={props.images[0]} />
        </div>
        <div className={classes.item2}>
          <img className={classes.imageFrame} src={props.images[1]} />
        </div>
        <div className={classes.item3}>
          <img className={classes.imageFrame} src={props.images[2]} />
        </div>
        <div className={classes.item4}>
          <img className={classes.imageFrame} src={props.images[3]} />
        </div>
        <div className={classes.item5}>
          <img className={classes.imageFrame} src={props.images[4]} />
        </div>
        <div className={classes.item6}>
          <img className={classes.imageFrame} src={props.images[5]} />
        </div>
        <div className={classes.item7}>
          <img className={classes.imageFrame} src={props.images[6]} />
        </div>
        <div className={classes.item8}>
          <img className={classes.imageFrame} src={props.images[7]} />
        </div>
      </div>
    </>
  );
}
