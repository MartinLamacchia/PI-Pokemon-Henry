import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailsPokemon } from "../../redux/actions";
import Loading from "../../components/Loading/Loading";
import style from "./Details.module.css";

const Details = () => {
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await dispatch(getDetailsPokemon(name));
        if (result !== "pending") {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDetails();

    return () => {
      dispatch(getDetailsPokemon({}));
      setLoading(true);
    };
  }, [dispatch, name]);

  console.log(pokemonDetails);

  return (
    <div className={style.container}>
      <Nav />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={style.containerDetails}>
              <div>
                <img src={pokemonDetails.image} alt="" />
                <div className={style.containerTypes}>
                  {pokemonDetails.types.map((e, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          e === "Ground"
                            ? style.ground
                            : e === "Fire"
                            ? style.fire
                            : e === "Ice"
                            ? style.ice
                            : e === "Shadow"
                            ? style.shadow
                            : e === "Poison"
                            ? style.poison
                            : e === "Rock"
                            ? style.rock
                            : e === "Water"
                            ? style.water
                            : e === "Dragon"
                            ? style.dragon
                            : e === "Flying"
                            ? style.flying
                            : e === "Bug"
                            ? style.bug
                            : e === "Grass"
                            ? style.grass
                            : e === "Dark"
                            ? style.dark
                            : e === "Fighting"
                            ? style.fighting
                            : e === "Steel"
                            ? style.steel
                            : e === "Psychic"
                            ? style.psychic
                            : e === "Unknown"
                            ? style.unknown
                            : e === "Normal"
                            ? style.normal
                            : e === "Ghost"
                            ? style.ghost
                            : e === "Electric"
                            ? style.electric
                            : e === "Fairy"
                            ? style.fairy
                            : null
                        }
                      >
                        {e}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2>{pokemonDetails.name}</h2>
                <div className={style.containerStats}>
                  <p>
                    Vida: <span>{pokemonDetails.hp}</span>
                  </p>
                  <p>
                    Velocidad: <span>{pokemonDetails.speed}</span>
                  </p>
                  <p>
                    Altura: <span>{pokemonDetails.height}</span>
                  </p>
                  <p>
                    Peso: <span>{pokemonDetails.weight}</span>
                  </p>
                  <p>
                    Ataque: <span>{pokemonDetails.attack}</span>
                  </p>
                  <p>
                    Defensa: <span>{pokemonDetails.defense}</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
