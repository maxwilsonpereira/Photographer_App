import React from "react";

import classes from "./workshop.module.css";
import img1 from "../../assets/images/workshop/img1.jpg";
import img2 from "../../assets/images/workshop/img2.jpg";

export default function Contato(props) {
  return (
    <div className={classes.containerBio}>
      <br />
      <h1>FOTOGRAFANDO A MÚSICA</h1>
      <br />
      <br />
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Assunto</h3>
      <h3>Oficina (workshop) que apresenta a fotografia ligada a música.</h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Sobre a oficina</h3>
      <h3>
        Mostrar para as pessoas interessadas que a fotografia em muitos momentos
        anda de mãos dadas com a música. Relação esta que a própria fotografia
        foi desenvolvida em trabalhos que experimentaram técnicas "artísticas" e
        que posteriormente influenciou muitos profissionais. Muitas dos
        registros do universo musical causaram impacto e choque cultural na
        fotografia e consequetemente no comportamento das pessoas. Artístas que
        junto de fotógrafos pensaram um conjunto linguagens visuais e estas
        imagens que um tempo viveram no “underground”, hoje são aceitas e vistas
        como arte fotográfica de inovação para o conhecimento visual. Na oficina
        será abordado conteúdo sobre; fotógrafos, imagens, músicas e estilos,
        controle de luz, enquadramento, composição e os possíveis espaços de
        atuação do fotógrafo de música.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Conteúdo</h3>
      <h3>
        Projeções de imagens, textos, livros, fotógrafos, técnica, estilos
        musicais, análise sobre trabalhos e atividade prática. Serão abordados
        assuntos relacionados a parte técnica e de atuação, e as experiências
        dos fotógrafos sobre múltiplos estilos na música. A finalidade é ativar
        as capacidades e possibilidades de cada participante.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Objetivo</h3>
      <h3>
        A especialização com aprofundamento dentro de uma área de atuação com
        fotografia. O fotógrafo poderá obter mais conhecimentos numa oficina
        exclusiva e inédita. As referências históricas dos trabalhos realizados,
        ajudarão a compreender o conteúdo e iremos traçar esta construção na
        qual se insere a fotografia ligada aos múltiplos temas musicais. Pessoas
        leigas no assunto receberão uma bagagem de conhecimento das duas
        manifestações artísticas (Fotografia e Música).
        <br />
        O conteúdo pode servir como base em aulas de arte ou para referenciais
        em estudos.
        <br />O mercado musical necessita de profissionais da fotografia e nele
        atuamos.
      </h3>
      <hr class={classes.horizontalLine} />
      <h3 className={classes.subtitle}>Flyers</h3>
      <div className={classes.gridWithTwo}>
        <div>
          {/* <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            SOMETHING ABOUT THIS FLYER?
          </h3> */}
          <img className={classes.images} src={img1} />
        </div>
        <div>
          <br className={classes.mobileOnly} />
          <br className={classes.mobileOnly} />
          {/* <h3 className={[classes.highlightWord, classes.minSize].join(" ")}>
            SOMETHING ABOUT THIS FLYER?
          </h3> */}
          <img className={classes.images} src={img2} />
        </div>
      </div>
      <hr class={classes.horizontalLine} />
    </div>
  );
}
