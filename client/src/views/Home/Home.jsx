import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getAllTypes, getNextPokemons, getPreviousPokemons } from "../../redux/actions";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";

const Home = ({ setUser, user }) => {
  const allPokemones = useSelector((state) => state.allPokemones);
  const pokemon = useSelector((state) => state.pokemon)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const loadingTime = async () => {
      setLoading(true)
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
  }, [dispatch]);

  const handlerNextPage = () => {
    setLoading(true)
    const loadingTime = () => {
      dispatch(getNextPokemons())
      .then(() => {
        setLoading(false)
        setPage(page + 1)
      })
      .catch((error) => {
        console.log("Error al cargar los Pokemones", error);
        setLoading(false);
      })
    }
    setTimeout(loadingTime, 2000);
  }

  const handlerPreviousPage = () => {
    setLoading(true)
    const loadingTime = () => {
      dispatch(getPreviousPokemons())
      .then(() => {
        setLoading(false)
        page !== 1 && setPage(page - 1)
      })
      .catch((error) => {
        console.log("Error al cargar los Pokemones", error);
        setLoading(false);
      })
    }
    setTimeout(loadingTime, 2000);
  }
console.log(pokemon);

  return (
    <div className={style.container}>
      <Nav setUser={setUser} user={user} setLoading={setLoading}/>
      <div className={style.containerCard}>
        {loading ? (
          <Loading />
        ) : 
          pokemon.id ? (
              <Card
                key={pokemon.id}
                id={pokemon.id < 100000 ? pokemon.id : "DB"}
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                speed={pokemon.speed}
                height={pokemon.height}
                weight={pokemon.weight}
              />
          ) :
          allPokemones && pokemon !== '' ?
        (
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
        )
            : 
            (<p>No se encontraron Pokémon.</p>)
      }
        {!loading && !pokemon.id && pokemon !== '' && (
          <div className={style.paginacion}>
            <h3 onClick={handlerPreviousPage}>Anterior</h3>
            <span>{page}</span>
            <h3 onClick={handlerNextPage}>Siguiente</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import Nav from "../../components/Nav/Nav";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemons, getAllTypes, getNextPokemons, getPreviousPokemons, searchPokemon } from "../../redux/actions";
// import Card from "../../components/Card/Card";
// import style from "./Home.module.css";
// import Loading from "../../components/Loading/Loading";

// const Home = ({ setUser, user }) => {
//   const allPokemones = useSelector((state) => state.allPokemones);
//   const pokemon = useSelector((state) => state.pokemon);
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const loadingTime = async () => {
//       setLoading(true);
//       dispatch(getPokemons())
//         .then(() => {
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log("Error al cargar los Pokemones", error);
//           setLoading(false);
//         });
//     };
//     setTimeout(loadingTime, 3000);
//     dispatch(getAllTypes());
//     console.log(pokemon);
//   }, [dispatch]);

//   const handlerNextPage = () => {
//     setLoading(true);
//     const loadingTime = () => {
//       dispatch(getNextPokemons())
//         .then(() => {
//           setLoading(false);
//           setPage(page + 1);
//         })
//         .catch((error) => {
//           console.log("Error al cargar los Pokemones", error);
//           setLoading(false);
//         });
//     };
//     setTimeout(loadingTime, 2000);
//   };

//   const handlerPreviousPage = () => {
//     setLoading(true);
//     const loadingTime = () => {
//       dispatch(getPreviousPokemons())
//         .then(() => {
//           setLoading(false);
//           setPage(page !== 1 ? page - 1 : 1);
//         })
//         .catch((error) => {
//           console.log("Error al cargar los Pokemones", error);
//           setLoading(false);
//         });
//     };
//     setTimeout(loadingTime, 2000);
//   };

//   return (
//     <div className={style.container}>
//       <Nav setUser={setUser} user={user} />
//       <div className={style.containerCard}>
//         {loading ? (
//           <Loading />
//         ) : pokemon.id ? (
//           <Card
//             key={pokemon.id}
//             id={pokemon.id < 100000 ? pokemon.id : "DB"}
//             name={pokemon.name}
//             types={pokemon.types}
//             image={pokemon.image}
//             hp={pokemon.hp}
//             attack={pokemon.attack}
//             defense={pokemon.defense}
//             speed={pokemon.speed}
//             height={pokemon.height}
//             weight={pokemon.weight}
//           />
//         ) : allPokemones ? (
//           allPokemones.map((poke) => (
//             <Card
//               key={poke.id}
//               id={poke.id < 100000 ? poke.id : "DB"}
//               name={poke.name}
//               types={poke.types}
//               image={poke.image}
//               hp={poke.hp}
//               attack={poke.attack}
//               defense={poke.defense}
//               speed={poke.speed}
//               height={poke.height}
//               weight={poke.weight}
//             />
//           ))
//         ) : (
//           <p>No se encontraron resultados.</p>
//         )}
//       </div>
//       {!loading && !pokemon.id && (
//         <div className={style.paginacion}>
//           <h3 onClick={handlerPreviousPage}>Anterior</h3>
//           <span>{page}</span>
//           <h3 onClick={handlerNextPage}>Siguiente</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

