import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getAllTypes } from "../../redux/actions";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";

const Home = ({ setUser, user }) => {
  const allPokemones = useSelector((state) => state.allPokemones);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTime = () => {
      dispatch(getPokemons())
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error al cargar los Pokemones", error);
          setLoading(false);
        });
    };
    setTimeout(loadingTime, 3000);
    dispatch(getAllTypes());
  }, []);

  return (
    <div className={style.container}>
      <Nav setUser={setUser} user={user} />
      <div className={style.containerCard}>
        {loading ? (
          <Loading />
        ) : (
          allPokemones?.map((poke) => (
            <Card
              key={poke.id}
              id={poke.id < 100000 ? poke.id : "DB"}
              name={poke.name}
              types={poke.types}
              image={poke.image}
              hp={poke.hp}
              attack={poke.attack}
              defense={poke.defense}
              speed={poke.speed}
              height={poke.height}
              weight={poke.weight}
            />
          ))
        )}
        {!loading ? (
          <div className={style.paginacion}>
            <h3>Anterior</h3>
            <span>1</span>
            <h3>Siguiente</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
