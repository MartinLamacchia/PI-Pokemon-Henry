import React from "react";
import style from "./Modal.module.css";
import ok from "../../assets/OK.png";
import { useNavigate } from "react-router-dom";

const ModalCreate = (v) => {

  const navigate = useNavigate()

  const handlerCloseModal = async (e) => {
    e.preventDefault()
    v ? navigate('/home') : navigate('/createPokemon')
  }

  return (
    <div className={style.container}>
      {v && (
        <div className={style.register}>
          <button className={style.btnCloseModal} onClick={handlerCloseModal}>X</button>
          <img src={ok} alt="Registro Exitoso" />
          <h2>Registro Exitoso</h2>
        </div>
      )}
    </div>
  );
};

export default ModalCreate;
