import React, { useState, useEffect } from "react";

// EMailJS:
// maxwilsonpereira@gmail.com (Vonogolon)
// npm install emailjs-com --save
// https://www.npmjs.com/package/emailjs-com
import emailjs from "emailjs-com";

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import classes from "./style.module.css";
import ButtonFunc from "../UI/Buttons/ButtonFunc";

// SPINNER / LOADER:
// https://www.npmjs.com/package/react-loader-spinner
import Loader from "react-loader-spinner";

// npm i react-icons
// https://react-icons.github.io/react-icons/
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Contato(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [messageToUser, setMessageToUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageToUser(null);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [messageToUser]);

  function sendEmailHandler(e) {
    setMessageToUser(
      <Loader
        type="Oval"
        color="#4d7994"
        height={50}
        width={50}
        // timeout={3000}
      />
    );
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test(email)) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Please fill in all fields correctly.
          {/* Favor preencher todos os campos corretamente. */}
        </div>
      );
      return;
    } else if (name.length < 3) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 3 characters for name.
          {/* Mínimo 3 caracteres para nome. */}
        </div>
      );
      return;
    } else if (telephone.length > 1 && telephone.length < 6) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 6 characters for phone.
          {/* Mínimo 6 caracteres para telefone. */}
        </div>
      );
      return;
    } else if (message.length < 10) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 10 characters for message.
          {/* Mínimo 10 caracteres para mensagem. */}
        </div>
      );
      return;
    } else {
      // SENDING MESSAGE:
      // npm install emailjs-com --save
      const templateParams = {
        from_name: name,
        from_email: email,
        from_telefone: telephone,
        to_name: "maxwilsonpereira@gmail.com",
        message: message,
      };
      emailjs
        .send(
          // SERVICE ID:
          "gmail",
          // TEMPLATE ID (get at emailjs.com / Email Templates):
          "max_template_1",
          // PARAMS:
          templateParams,
          // USER ID (get at emailjs.com / Account/API KEYS):
          process.env.REACT_APP_EMAILJS_KEY
        )
        .then(
          function (response) {
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Message sent successfully!
                {/* Mensagem enviada com sucesso! */}
                <br />I will contact you soon.
                {/* Em breve entrarei em contato. */}
              </div>
            );
            console.log("SUCCESS!", response.status, response.text);
            setName("");
            setEmail("");
            setTelephone("");
            setMessage("");
          },
          function (err) {
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Service currently unavailable.
                {/* Serviço indisponível no momento. */}
                <br />
                Please contact us by email or phone.
                {/* Favor entrar em contato por e-mail ou telefone. */}
              </div>
            );
          }
        );
    }
  }
  function enterKeyPressedHandler(event) {
    // event.preventDefault();
    var code = event.keyCode || event.which;
    if (code === 13) {
      // alert("ENTER KEY PRESSED!");
      sendEmailHandler(event);
    }
  }

  return (
    <div className={classes.contactGrid}>
      <div>
        <h1>{props.title}</h1>
        <br />
        {/* <h2>{props.description}</h2> */}
        <br />
        <br />
        <h3>
          <MdEmail
            className={classes.EmailLog}
            size={35}
            color={props.IconColor}
          />
          luizlima@gmail.com
        </h3>
        <br />
        <h3>
          <MdCall
            className={classes.EmailLog}
            size={35}
            color={props.IconColor}
          />
          +43 67677226162
        </h3>
        <br />
        <br />
        {/* <span className={classes.desktopOnly}> */}
        <br />
        <br />
        {messageToUser}
        {/* </span> */}
      </div>
      <div id="anchorPoint">
        <input
          onChange={(e) => setName(e.target.value)}
          onKeyPress={enterKeyPressedHandler}
          type="text"
          required
          placeholder="Name"
          name={name}
          value={name}
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={enterKeyPressedHandler}
          type="email"
          required
          placeholder="E-mail"
          name={email}
          value={email}
        />
        <br />
        <input
          onChange={(e) => setTelephone(e.target.value)}
          onKeyPress={enterKeyPressedHandler}
          type="number"
          placeholder="Telephone (optional)"
          name={telephone}
          value={telephone}
        />
        <br />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          required
          placeholder="Message"
          name={message}
          value={message}
        />
        <div className={classes.SubmitBtn}>
          <AnchorLink href="#anchorPoint">
            <ButtonFunc btnColor={props.btnColor} function={sendEmailHandler}>
              SEND
            </ButtonFunc>
          </AnchorLink>
        </div>
        {/* <span className={classes.mobileOnly}>
          <br />
          {messageToUser}
        </span> */}
      </div>
      <br />
    </div>
  );
}
