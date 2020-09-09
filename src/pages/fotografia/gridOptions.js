import React from "react";
// npm i react-router-hash-link
import { NavHashLink } from "react-router-hash-link";

import classes from "./style.module.css";

import empresas from "../../assets/images/fotografia/empresas.jpg";
import eventos from "../../assets/images/fotografia/eventosefestivais.jpg";
import nopalco from "../../assets/images/fotografia/nopalco.jpg";
import retratos from "../../assets/images/fotografia/retratos.jpg";

export default function GridOptions() {
  return (
    <div className={classes.GridContainer}>
      <div className={classes.item1}>
        <h3>Events</h3>
        <NavHashLink to="/photography/events#start">
          <img className={classes.imageFrame} src={eventos} />
        </NavHashLink>
      </div>
      <div className={classes.item2}>
        <h3>Portraits</h3>
        <NavHashLink to="/photography/portraits#start">
          <img className={classes.imageFrame} src={retratos} />
        </NavHashLink>
      </div>
      <div className={classes.item3}>
        <h3>Stages</h3>
        <NavHashLink to="/photography/stages#start">
          <img className={classes.imageFrame} src={nopalco} />
        </NavHashLink>
      </div>
      <div className={classes.item4}>
        <h3>Companies</h3>
        <NavHashLink to="/photography/companies#start">
          <img className={classes.imageFrame} src={empresas} />
        </NavHashLink>
      </div>
    </div>
  );
}
