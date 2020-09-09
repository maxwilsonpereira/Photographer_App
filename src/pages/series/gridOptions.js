import React from "react";
// npm i react-router-hash-link
// import { NavHashLink } from "react-router-hash-link";

import classes from "./style.module.css";

import Mashupa from "../../assets/images/series/mashupa.jpg";
import Mashupb from "../../assets/images/series/mashupb.jpg";
import MakeMeUpa from "../../assets/images/series/makemeupa.jpg";
import MakeMeUpb from "../../assets/images/series/makemeupb.jpg";

export default function GridOptions() {
  return (
    <div className={classes.GridContainer}>
      <div className={classes.grida}>
        <div className={classes.textOverImg}>
          <h1 className={classes.clickme}>Text</h1>
          <h3 className={classes.smallerFont}>Mashup Chaos A.D.</h3>

          <br />
          <h4 className={classes.smallerFont}>
            My desire of a harmonic (and disharmonious) junction between two
            images that may be similar in their sense, plasticity and interest
            comes from what is done in music mashups. The aim is to create
            curiosity in the minds of those who see them. It turns out not to be
            an easy thing to do. We see numerous situations in cities, countries
            and in different locations. Eventually we record these experiences.
            In my case as a photographer the chance to register is even greater
            because I reach out to these experiences, and years later when
            watching the photos, I see a certain contradictory communication
            between the images. What made me intuit were the possibilities in
            the dialogues between the images! It’s an idea of a narrative in the
            exchange and contrast between two or more (photographic) records,
            ranging from discomfort to subtlety.
          </h4>
        </div>
        {/* <NavHashLink to="/series/chaosad#start"> */}
        <div className={classes.imagesContainer}>
          <img className={classes.imageTop} src={Mashupb} />
          <img className={classes.imageBottom} src={Mashupa} />
        </div>
        {/* </NavHashLink> */}
      </div>
      <div className={classes.gridb}>
        <div className={classes.textOverImg}>
          <h1 className={classes.clickme}>Text</h1>
          <h3 className={classes.smallerFont}>Make Me Up Music</h3>
          <br />
          <h4 className={classes.smallerFont}>
            Um jornalista que escreve sobre música no Rio de Janeiro uma vez,
            numa conversa informal, falou assim para mim: “banda tem que ter
            visual”. Desde então esta frase retorna de tempo em tempo na minha
            memória. Criar uma imagem com intenção visual não é novidade, mas
            também não pode ser considerado somente marketing da indústria da
            música. Muitos músicos são no dia a dia as mesmas personalidades de
            quando estão em cima do palco, outros são parte do que vemos em suas
            apresentações, mas todos são únicos em suas individualidades
            estéticas. E nesse interesse que fui atrás de cada um dos músicos
            fotografados para registra-los no intuito de colocá-los dentro de
            retratos que são influenciados pelas pinturas clássicas da Monalisa
            e do Mozart.
          </h4>
        </div>
        {/* <NavHashLink to="/series/makemeupmusic#start"> */}
        <div className={classes.imagesContainer}>
          <img className={classes.imageTop} src={MakeMeUpb} />
          <img className={classes.imageBottom} src={MakeMeUpa} />
        </div>
        {/* </NavHashLink> */}
      </div>
    </div>
  );
}
