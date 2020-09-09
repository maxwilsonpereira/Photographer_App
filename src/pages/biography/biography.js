import React from "react";

import classes from "./biography.module.css";
import img1 from "../../assets/images/biography/img1.jpg";
import img2 from "../../assets/images/biography/img2.jpg";

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
      <h3 className={classes.subtitle}>Education and Experience</h3>
      <h3>
        Studied journalism and photography. Besides several works, Luiz was a
        photography instructor at the School of Art and Technology (Spectaculu)
        and at the Social Service of Commerce / SESC-Rio.
        <br />
        <br />
        The photographer released two books, Rodas (2012 Brazil / Finland), with
        documentary images of popular samba in the city of Rio de Janeiro and
        Contos Fotográfico (2014 Brazil / Austria), with stories and chronicles
        involving situations of photography in the lives of people.
        <br />
        <br />
        Luiz Lima is in constant production of his authorial work, either with
        the series, Mashup (Chaos AD), where he exhibits in different countries
        (Germany, Austria, Brazil, Italy, Monaco, France...) or with the series,
        Make me up Music.
      </h3>
      <hr class={classes.horizontalLine} />
      <img
        className={[classes.images, classes.mobileOnly].join(" ")}
        src={img1}
      />
      <hr class={classes.horizontalLine} />

      <h3 className={classes.subtitle}>Considerations</h3>
      <h3>
        Luiz thinks beyond photography and he is very interested in new
        technologies to support his work. He produces for the existence of
        photographic art and culture.
        <br />
        <br />
        New works with innovations will arrive!
      </h3>
      <hr class={classes.horizontalLine} />
      {/* <h3 className={classes.subtitle}>Certificates (main ones)</h3> */}
      <div className={classes.gridWithTwo}>
        <div>
          {/* <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            One Image Here:
          </h3> */}
          <img
            className={[classes.images, classes.desktopOnly].join(" ")}
            src={img1}
          />
        </div>
        <div>
          {/* <br className={classes.mobileOnly} />
          <br className={classes.mobileOnly} /> */}
          {/* <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            One Image Here:
          </h3> */}
          <img className={classes.images} src={img2} />
        </div>
      </div>
      <hr class={classes.horizontalLine} />
    </div>
  );
}
