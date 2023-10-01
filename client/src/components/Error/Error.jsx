import React from "react";
import style from "./Error.module.css";
import Nav from "../Nav/Nav";
import { useSelector } from "react-redux";

const Error = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Nav />
      <div className={style.container}>
        {user.length <= 0 ? (
          <div className={style.containerNoUser}>
            <img
              src="https://s5.favim.com/orig/51/snorlax-pokemon-sleep-Favim.com-464592.gif"
              alt="Imagen error al querer ingresar sin usuario"
            />
            <p>
              Debe registrase o iniciar secion para entrar a la
              aplicacion...❗❗❗
            </p>
            </div>
        ) : (
          <div className={style.containerUser}>
            <img
              src="https://www.pngmart.com/files/22/Mr.-Rime-Pokemon-PNG.gif"
              alt="Imagen error al querer ingresar sin usuario"
            />
            <p>
              La pagina a la que quiere acceder no existe...❗❗❗
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Error;
