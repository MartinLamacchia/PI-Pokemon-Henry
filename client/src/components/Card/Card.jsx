import React from "react";
import style from "./Card.module.css";

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
        <div className={hp ? style.container : style.containerStatsNull}>
        <div className={style.containerId}>
          <span className={style.spanId}>{id}</span>
          <h2 onClick={handlerDetails} className={style.title}>
            {name}
          </h2>
        </div>
        {
          image ?
          <img
            src={image}
            alt={`Imagen Pokemon ${name}`}
            className={style.img} 
          /> :
          <div className={style.containerImgNull}>
            <h3 className={style.imgNull}>No hay Imagen</h3> 
          </div>
        }
        <div className={style.containerHp}>
          {hp && (
            <p>
              Vida: <span className={style.stats}>{hp}</span>
            </p>
          )}
          {speed && (
            <p>
              Velocidad: <span className={style.stats}>{speed}</span>
            </p>
          )}
          {height && (
            <p>
              Altura: <span className={style.stats}>{height}</span>
            </p>
          )}
          {weight && (
            <p>
              Peso: <span className={style.stats}>{weight}</span>
            </p>
          )}
        </div>
        {types && (
          <p className={style.containerTipo}>
            Tipo: 
            {
              types.map((e, index) =>  (
                <button key={index} className={style.stats}>{e}</button>
              ))
            }
          </p>
        )}
        <div className={style.containerAttack}>
          {attack && (
            <p>
              Ataque: <span className={style.stats}>{attack}</span>
            </p>
          )}
          {defense && (
            <p>
              Defensa: <span className={style.stats}>{defense}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

