import React from "react";
import style from "./Card.module.css";
import tarjetaBack from "../../assets/TarjetaBack.jpg";
import { useState } from "react";

const Card = ({
  id,
  name,
  image,
  types,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
}) => {
  const handlerDetails = () => {

  }

  return (
    <>
        <div className={style.container}>
        <div className={style.containerId}>
          <span className={style.spanId}>{id}</span>
          <h2 onClick={handlerDetails} className={style.title}>{name}</h2>
        </div>
        <img src={image} alt={`Imagen Pokemon ${name}`} className={style.img} />
        <div className={style.containerHp}>
          <p>
            Vida: <span className={style.stats}>{hp}</span>
          </p>
          <p>
            Velocidad: <span className={style.stats}>{speed}</span>
          </p>
          <p>
            Altura: <span className={style.stats}>{height}</span>
          </p>
          <p>
            Peso: <span className={style.stats}>{weight}</span>
          </p>
        </div>
        <p className={style.containerTipo}>
          Tipo: <span className={style.stats}>{types}</span>
        </p>
        <div className={style.containerAttack}>
          <p>
            Ataque: <span className={style.stats}>{attack}</span>
          </p>
          <p>
            Defensa: <span className={style.stats}>{defense}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
