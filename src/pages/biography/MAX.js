import React from "react";

import classes from "./biography.module.css";
import imgReact from "../../assets/images/biography/react.jpg";
import imgNodejs from "../../assets/images/biography/nodejs.jpg";

// npm i react-icons
// https://react-icons.github.io/react-icons/
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Contato(props) {
  return (
    <div className={classes.containerBio}>
      <br />
      <h1>LUIZ LIMA</h1>
      <br />
      <br />
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>About</h3>
      <h3>
        From Rio de Janeiro, Brazil, Luiz Lima is currently living in Vienna,
        Austria.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Professional Experience</h3>
      <h3>
        Freelancer Web Developer (March / April 2020) Last web application
        developed 100% by myself with React (JavaScript, HTML, CSS): Trafega -
        Web Developer (July 2018 – January 2020) Part of the development team
        that developed the prototype of the web site and app www.trafega.com,
        using <span className={classes.highlightWord}>React</span>,{" "}
        <span className={classes.highlightWord}>JavaScript</span>,{" "}
        <span className={classes.highlightWord}>Node.js</span>,{" "}
        <span className={classes.highlightWord}>SQL</span>,{" "}
        <span className={classes.highlightWord}>HTML</span> and{" "}
        <span className={classes.highlightWord}>CSS</span>. Worked extensively
        using React, JavaScript, HTML and CSS.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Education</h3>
      <h3>
        Universidade Estácio de Sa, Rio de Janeiro – Brazil – 2013 Bachelor in
        Computer Information Systems
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Professional Skills</h3>
      <h3>
        JavaScript (React), HTML, CSS, Node.js, SQL, Adobe Photoshop, Adobe
        Premiere Pro, Pro Tools.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Certificates (main ones)</h3>
      <div className={classes.gridWithTwo}>
        <div>
          <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            React - The Complete Guide (Included Hooks, React Router, Redux)
          </h3>
          <img className={classes.images} src={imgReact} />
        </div>
        <div>
          <br className={classes.mobileOnly} />
          <br className={classes.mobileOnly} />
          <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            NodeJS - The Complete Guide (Included MVC, REST APIs, GraphQL, Deno)
          </h3>
          <img className={classes.images} src={imgNodejs} />
        </div>
      </div>
      <hr class={classes.horizontalLine} />
    </div>
  );
}
