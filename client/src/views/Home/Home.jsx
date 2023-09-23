import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getAllTypes,
  getNextPokemons,
  getPreviousPokemons,
  getPokemonsAll,
  orderByName,
  orderByAttack,
  filterApiDB,
  filterType
} from "../../redux/actions";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";

const Home = ({ setUser, user }) => {
  const allPokemones = useSelector((state) => state.allPokemones);
  const getAllPokemons = useSelector((state) => state.getAllPokemons);
  const pokemon = useSelector((state) => state.pokemon);
  const error = useSelector((state) => state.error);
  const allTypes = useSelector((state) => state.allTypes);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filtros, setFiltros] = useState(false)
  const [aux, setAux] = useState(true)

  const errors = {
    name: "",
    image: "",
    hp: "",
    speed: "",
    height: "",
    weight: "",
    attack: "",
    defense: "",
  };

  // Muestra los 12 primeros Pokemones - Guarda en DB las Types - Trae de la API 400 Pokemones para filtros
  useEffect(() => {
    setLoading(true);
    const loadingTime = async () => {
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
    dispatch(getPokemonsAll());
  }, [dispatch]);

  // Paginacion sin filtros
  const handlerNextPage = () => {
    setLoading(true);
    const loadingTime = () => {
      dispatch(getNextPokemons())
        .then(() => {
          setLoading(false);
          setPage(page + 1);
        })
        .catch((error) => {
          console.log("Error al cargar los Pokemones", error);
          setLoading(false);
        });
    };
    setTimeout(loadingTime, 2000);
  };

  const handlerPreviousPage = () => {
    setLoading(true);
    const loadingTime = () => {
      dispatch(getPreviousPokemons())
        .then(() => {
          setLoading(false);
          page !== 1 && setPage(page - 1);
        })
        .catch((error) => {
          console.log("Error al cargar los Pokemones", error);
          setLoading(false);
        });
    };
    setTimeout(loadingTime, 2000);
  };

  const handlerOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
    setFiltros(true)
    setAux(!aux)
  };

  const handlerOrderByAttack = (e) => {
    dispatch(orderByAttack(e.target.value));
    setFiltros(true)
    setAux(!aux)
  };

  const handlerFilterApiDB = (e) => {
    dispatch(filterApiDB(e.target.value));
    setFiltros(true)
  };

  const handlerFilterType = (e) => {
    dispatch(filterType(e.currentTarget.id))
    setFiltros(true)
  }

  // Paginacion para los filtros
  const lastCard = page * 12
  const firstCard  = lastCard - 12
  const currentPokemon  = getAllPokemons.slice(firstCard, lastCard)


  return (
    <div className={style.container}>
      <Nav setUser={setUser} user={user} filtros={filtros} setFiltros={setFiltros}/>
      {
        !error &&
        <div className={style.containerType}>
        {allTypes.map((type, index) => {
          return (
            <button
              key={index}
              id={type.name}
              className={
                type.name === "Ground"
                  ? style.ground
                  : type.name === "Fire"
                  ? style.fire
                  : type.name === "Ice"
                  ? style.ice
                  : type.name === "Shadow"
                  ? style.shadow
                  : type.name === "Poison"
                  ? style.poison
                  : type.name === "Rock"
                  ? style.rock
                  : type.name === "Water"
                  ? style.water
                  : type.name === "Dragon"
                  ? style.dragon
                  : type.name === "Flying"
                  ? style.flying
                  : type.name === "Bug"
                  ? style.bug
                  : type.name === "Grass"
                  ? style.grass
                  : type.name === "Dark"
                  ? style.dark
                  : type.name === "Fighting"
                  ? style.fighting
                  : type.name === "Steel"
                  ? style.steel
                  : type.name === "Psychic"
                  ? style.psychic
                  : type.name === "Unknown"
                  ? style.unknown
                  : type.name === "Normal"
                  ? style.normal
                  : type.name === "Ghost"
                  ? style.ghost
                  : type.name === "Electric"
                  ? style.electric
                  : type.name === "Fairy"
                  ? style.fairy
                  : null
              }
              onClick={handlerFilterType}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      }
      {
        !error &&
        <div className={style.containerSelect}>
        <select name="orderName" id="" onChange={handlerOrderByName}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select name="orderAttack" id="" onChange={handlerOrderByAttack}>
          <option value="Minimo">Minimo</option>
          <option value="Maximo">Maximo</option>
        </select>
        <select name="filterApiDB" id="" onChange={handlerFilterApiDB}>
          <option value="Todos">Todos</option>
          <option value="Api">API</option>
          <option value="DB">Base de Datos</option>
        </select>
      </div>
      }
      <div className={style.containerCard}>
        {
        loading ? (
          <Loading />
        ) :
         pokemon.id && !error ? (
          <Card
            key={pokemon.id}
            id={pokemon.id < 100000 ? pokemon.id : "DB"}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.image}
            // hp={pokemon.hp}
            // attack={pokemon.attack}
            // defense={pokemon.defense}
            // speed={pokemon.speed}
            // height={pokemon.height}
            // weight={pokemon.weight}
            errors={errors}
          />
          
        ) : filtros && !pokemon.id && !error ? (
          currentPokemon?.map((poke) => (
            <Card
              key={poke.id}
              id={poke.id < 100000 ? poke.id : "DB"}
              name={poke.name}
              types={poke.types}
              image={poke.image}
              // hp={poke.hp}
              // attack={poke.attack}
              // defense={poke.defense}
              // speed={poke.speed}
              // height={poke.height}
              // weight={poke.weight}
              errors={errors}
            />
          ))
        ) 
        : !loading && allPokemones && !pokemon.id && !error ? (
          allPokemones?.map((poke) => (
            <Card
              key={poke.id}
              id={poke.id < 100000 ? poke.id : "DB"}
              name={poke.name}
              types={poke.types}
              image={poke.image}
              // hp={poke.hp}
              // attack={poke.attack}
              // defense={poke.defense}
              // speed={poke.speed}
              // height={poke.height}
              // weight={poke.weight}
              errors={errors}
            />
          ))
        ) : (
          error !== "" && (
            <div className={style.error}>
              <img
                src="https://cdn.dribbble.com/users/1505511/screenshots/3374551/___.gif"
                alt=""
              />
              <p>{error}</p>
            </div>
          )
        )}
        {!loading && !pokemon.id && pokemon !== "" && !error && (
          <div className={style.paginacion}>
            <h3 onClick={handlerPreviousPage}>Anterior</h3>
            <span>{page}</span>
            {
              currentPokemon.length < 12 ? null :
              <h3 onClick={handlerNextPage}>Siguiente</h3>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
