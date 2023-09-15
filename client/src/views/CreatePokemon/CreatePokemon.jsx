import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import style from "./CreatePokemon.module.css";
import Card from "../../components/Card/Card";

const CreatePokemon = () => {
  const allTypes = useSelector((state) => state.allTypes);
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.contentAll}>
        <Card/>
        {/* <div className={style.containerCard}>
          <div className={style.containerId}>
            <span className={style.spanId}>DB</span>
            <h2 className={style.title}></h2>
          </div>
          <img src="" alt={`Imagen Pokemon`} className={style.img} />
          <div className={style.containerHp}>
            <p>
              Vida: <span className={style.stats}></span>
            </p>
            <p>
              Velocidad: <span className={style.stats}></span>
            </p>
            <p>
              Altura: <span className={style.stats}></span>
            </p>
            <p>
              Peso: <span className={style.stats}></span>
            </p>
          </div>
          <p className={style.containerTipo}>
            Tipo: <span className={style.stats}></span>
          </p>
          <div className={style.containerAttack}>
            <p>
              Ataque: <span className={style.stats}></span>
            </p>
            <p>
              Defensa: <span className={style.stats}></span>
            </p>
          </div>
        </div> */}
        <div className={style.containerForm}>
          <h2>Crear un Pokemon</h2>
          <form action="">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" />
              <label htmlFor="image">Imagen</label>
              <input type="text" name="image" />
            </div>
            <div>
              <label htmlFor="hp">Vida</label>
              <input type="text" name="hp" />
              <label htmlFor="speed">Velocidad</label>
              <input type="text" name="speed" />
              <label htmlFor="height">Altura</label>
              <input type="text" name="height" />
              <label htmlFor="weight">Peso</label>
              <input type="text" name="weight" />
            </div>
            <div>
              <label htmlFor="type">Tipos (Maximo: 3)</label>
              <div>
                {allTypes?.map((type) => (
                  <button
                    className={
                      type.name === "fire"
                        ? style.fire
                        : type.name === "ground"
                        ? style.ground
                        : style.gost
                    }
                  >
                    {type.name}
                  </button>
                ))}
              </div>
              <input type="text" name="type" />
            </div>
            <div>
              <label htmlFor="attack">Ataque</label>
              <input type="text" name="attack" />
              <label htmlFor="defense">Defensa</label>
              <input type="text" name="defense" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePokemon;