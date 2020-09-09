import React from "react";

import classes from "./style.module.css";

import luizLogoBlack from "../../../assets/images/luizlogo.png";

export default function LogoBlack() {
  return (
    <img
      className={[classes.luizLogo, classes.fadeIn].join(" ")}
      src={luizLogoBlack}
    />
  );
}
