import React, { useState } from "react";
import style from "./Modal.module.css";
import fail from "../../assets/Fallo.png";
import ok from "../../assets/OK.png";

const ModalLanding = ({
  v,
  f,
  text,
  setModal,
  setVistaLogin,
  setDisplayLogin,
  setVistaRegister,
  setDisplayRegister,
}) => {
  const handlerCloseModal = async (e) => {
    e.preventDefault();
    setModal(false);
    setVistaRegister(false);
    setDisplayRegister(false);
  };

  const handlerCloseModalFail = async (e) => {
    e.preventDefault();
    setModal(false);
    if (text === 'Usuario no encontrado') {
      setVistaLogin(false);
      setDisplayLogin(false);
    } else {
      setVistaRegister(false);
      setDisplayRegister(false);
    }
  };

  return (
    <div className={style.container}>
      {v && (
        <div className={style.register}>
          <button className={style.btnCloseModal} onClick={handlerCloseModal}>
            X
          </button>
          <img src={ok} alt={text} />
          <h2>{text}</h2>
        </div>
      )}
      {f && (
        <div className={style.register}>
          <button
            className={style.btnCloseModal}
            onClick={handlerCloseModalFail}
          >
            X
          </button>
          <img src={fail} alt={text} />
          <h2>{text}</h2>
        </div>
      )}
    </div>
  );
};

export default ModalLanding;
