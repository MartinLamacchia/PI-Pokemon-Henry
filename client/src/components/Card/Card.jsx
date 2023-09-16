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
  errors
}) => {
  const handlerDetails = () => {};

  return (
    <>
      <div className={hp && !errors.hp ? style.container : style.containerStatsNull}>
        <div className={style.containerId}>
          <span className={style.spanId}>{id}</span>
          <h2 onClick={handlerDetails} className={style.title}>
            {!errors.name ? name : null}
          </h2>
        </div>
        {image && !errors.image ?(
          <img
            src={image}
            alt={`Imagen Pokemon ${name}`}
            className={style.img}
          />
        ) : (
          <div className={style.containerImgNull}>
            <h3 className={style.imgNull}>No hay Imagen</h3>
          </div>
        )}
        <div className={style.containerHp}>
          {hp && !errors.hp && (
            <p>
              Vida: <span className={style.stats}>{hp}</span>
            </p>
          )}
          {speed && !errors.speed && (
            <p>
              Velocidad: <span className={style.stats}>{speed}</span>
            </p>
          )}
          {height && !errors.height && (
            <p>
              Altura: <span className={style.stats}>{height}</span>
            </p>
          )}
          {weight && !errors.weight && (
            <p>
              Peso: <span className={style.stats}>{weight}</span>
            </p>
          )}
        </div>
        {types && types.length > 0 && (
          <div className={style.containerTypes}>
            <p className={style.containerTipo}>Tipo:</p>
            <div className={style.containerType}>
            {types.map((e, index) => (
                <button key={index} className={e === 'Ground' ? style.ground : e === 'Fire' ? style.fire : e === 'Ice' ? style.ice : e === 'Shadow' ? style.shadow : e === 'Poison' ? style.poison : e === 'Rock' ? style.rock : e === 'Water' ? style.water : e === 'Dragon' ? style.dragon : e === 'Flying' ? style.flying  : e === 'Bug' ? style.bug  : e === 'Grass' ? style.grass  : e === 'Dark' ? style.dark  : e === 'Fighting' ? style.fighting  : e === 'Steel' ? style.steel  : e === 'Psychic' ? style.psychic  : e === 'Unknown' ? style.unknown  : e === 'Normal' ? style.normal  : e === 'Ghost' ? style.ghost   : e === 'Electric' ? style.electric : e === 'Fairy' ? style.fairy : null}>
                  {e}
                </button>
              ))}
            </div>
            
          </div>
        )}
        <div className={style.containerAttack}>
          {attack && !errors.attack && (
            <p>
              Ataque: <span className={style.stats}>{attack}</span>
            </p>
          )}
          {defense && !errors.defense && (
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
