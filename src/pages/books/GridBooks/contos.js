import React from "react";

import classes from "../book.module.css";
import contosCover from "../../../assets/images/books/contosCover.jpg";

export default function Contos() {
  return (
    <div className={classes.containerBio}>
      <br />
      <h1>Contos Fotográficos</h1>
      <br />
      <br />
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Sobre</h3>
      <h3>
        É um livro de um fotógrafo, escrito, que não possui imagens.
        <br />
        <br />A ideia inicial é rememorar acontecimentos, pensamentos e assuntos
        relacionados ao entorno do viver fotográfico.
        <br />
        <br />
        Tem homenagens nominais de algumas pessoas que atuam com a fotografia e,
        principalmente, histórias e vivências contadas, ou mesmo pensadas e
        criadas a partir dos exemplos mostrados por seus admiradores e agentes
        produtores.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Cover</h3>
      <div>
        <img className={classes.images} src={contosCover} />
      </div>
      <hr class={classes.horizontalLine} />
    </div>
  );
}
