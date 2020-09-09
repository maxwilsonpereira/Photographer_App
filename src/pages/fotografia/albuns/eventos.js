import React from "react";

import AlbumFotos from "../../../components/albumFotos";

import img1 from "../../../assets/images/fotografia/eventos/img1.jpg";
import img2 from "../../../assets/images/fotografia/eventos/img2.jpg";
import img3 from "../../../assets/images/fotografia/eventos/img3.jpg";
import img4 from "../../../assets/images/fotografia/eventos/img4.jpg";
import img5 from "../../../assets/images/fotografia/eventos/img5.jpg";
import img6 from "../../../assets/images/fotografia/eventos/img6.jpg";
import img7 from "../../../assets/images/fotografia/eventos/img7.jpg";
import img8 from "../../../assets/images/fotografia/eventos/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Eventos() {
  return <AlbumFotos images={images} />;
}
