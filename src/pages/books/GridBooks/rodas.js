import React from "react";

import classes from "../book.module.css";
import rodasCover from "../../../assets/images/books/rodasCover.jpg";

export default function Rodas() {
  return (
    <div className={classes.containerBio}>
      <br />
      <h1>Rodas</h1>
      <br />
      <br />
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Sobre</h3>
      <h3>
        A obra reúne 77 registros de algumas das populares rodas de samba que
        acontecem em variados lugares no Rio de Janeiro, com o olhar do
        fotógrafo sob a perspectiva do público como parte do espetáculo, ao
        mesmo nível dos músicos, sem distanciamento ou em cima de palcos.
        <br />
        <br />
        Em seu primeiro livro, Luiz Lima apresenta o valor histórico e artístico
        das rodas de samba, que fazem parte da cultura e do cotidiano da
        diversão do carioca em imagens documentais, nas quais o contraste do
        preto e branco realça as emoções, os detalhes, as luzes e os movimentos
        dos participantes e frequentadores, e define que “o prazer e a
        grandiosidade estão em todos os presentes, e a emoção vai muito além dos
        músicos, pois o público é parte importante do círculo que se faz ao
        redor das mesas, com vontade, sambando, batendo palmas e ajudando no
        andamento e na sintonia das músicas tocadas. Além disso, valoriza a
        criação que é herança dos negros, manifestação da diversão que virou
        forte ação cultural no Rio de Janeiro”.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Conference</h3>
      <div>
        <img className={classes.images} src={rodasCover} />
      </div>
      <hr class={classes.horizontalLine} />
    </div>
  );
}
