import React, { useState } from "react";

// npm i react-router-hash-link
import { NavHashLink } from "react-router-hash-link";

import classes from "./style.module.css";

export default function NavigationItems(props) {
  // const [isShown, setIsShown] = useState(false);

  return (
    <>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Home
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/photography#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Photography
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/books#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Books
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/series#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Series
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/workshop#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Workshop
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/biography#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Biography
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/contact#start"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Contact
        </NavHashLink>
      </li>
      {/* <li className={[classes.NavigationItem, classes.languages].join(" ")}>
        <span
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <span className={classes.pointerNoPadding}>Language</span>
        </span>
        {isShown && (
          <div
            className={classes.languageOptions}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <div className={classes.subMenuBox} />
            <span className={classes.pointer}>Português</span>
            <br />
            <span className={classes.pointer}>Deutsch</span>
          </div>
        )}
      </li> */}
    </>
  );
}
