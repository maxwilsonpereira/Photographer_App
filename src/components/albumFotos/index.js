import React, { useState, useEffect } from "react";

// npm install react-images
// https://github.com/jossmac/react-images
// https://github.com/jossmac/react-images/blob/v1/docs/pages/Home/GalleryExample.js
import Carousel, { Modal, ModalGateway } from "react-images";
// NEW ONE (MAYBE TRY IN THE FUTURE):
// http://react-responsive-carousel.js.org/

import classes from "./style.module.css";

export default function Fotografia(props) {
  // const images = [{ source: props.images[0] }, { source: props.images[1] }];
  const [imagesArray, setImagesArray] = useState([]);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // const { modalIsOpen } = this.state;
  }, [modalIsOpen]);

  function toggleModal(index) {
    setIndexCurrent(index);
    setImagesArray([
      { source: props.images[0] },
      { source: props.images[1] },
      { source: props.images[2] },
      { source: props.images[3] },
      { source: props.images[4] },
      { source: props.images[5] },
      { source: props.images[6] },
      { source: props.images[7] },
    ]);
    // setImagesArray([{ source: props.images[index] }]);
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <>
      {/* <Carousel views={images} /> */}
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel currentIndex={indexCurrent} views={imagesArray} />
          </Modal>
        ) : null}
      </ModalGateway>
      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: "absolute", top: "0px" }} />

      <div className={classes.GridContainer}>
        <div className={classes.item1} onClick={() => toggleModal(0)}>
          <img className={classes.imageFrame} src={props.images[0]} />
        </div>
        <div className={classes.item2} onClick={() => toggleModal(1)}>
          <img className={classes.imageFrame} src={props.images[1]} />
        </div>
        <div className={classes.item3} onClick={() => toggleModal(2)}>
          <img className={classes.imageFrame} src={props.images[2]} />
        </div>
        <div className={classes.item4} onClick={() => toggleModal(3)}>
          <img className={classes.imageFrame} src={props.images[3]} />
        </div>
        <div className={classes.item5} onClick={() => toggleModal(4)}>
          <img className={classes.imageFrame} src={props.images[4]} />
        </div>
        <div className={classes.item6} onClick={() => toggleModal(5)}>
          <img className={classes.imageFrame} src={props.images[5]} />
        </div>
        <div className={classes.item7} onClick={() => toggleModal(6)}>
          <img className={classes.imageFrame} src={props.images[6]} />
        </div>
        <div className={classes.item8} onClick={() => toggleModal(7)}>
          <img className={classes.imageFrame} src={props.images[7]} />
        </div>
      </div>
    </>
  );
}
