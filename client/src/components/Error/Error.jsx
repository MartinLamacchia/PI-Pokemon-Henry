import React from "react";
import style from "./Error.module.css";
import Nav from "../Nav/Nav";

const Error = () => {

  return (
    <>
      <Nav/>
      <div className={style.container}>
        <img src='https://s5.favim.com/orig/51/snorlax-pokemon-sleep-Favim.com-464592.gif' alt="Imagen error al querer ingresar sin usuario"/>
        <p>Debe registrase o iniciar secion para entrar a la aplicacion...❗❗❗</p>
      </div>
    </>
  );
};

export default Error;
