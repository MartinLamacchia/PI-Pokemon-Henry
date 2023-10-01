import {
  GETALLPOKEMONS,
  GETALLTYPES,
  GETNEXTPAGE,
  GETPREVIOUSPAGE,
  USERLOGIN,
  GETPOKEMONID,
  DELETEPOKEMONID,
  ERROR,
  DETAILPOKEMON,
  GETPOKEMONSALL,
  ORDERBYNAME,
  ORDERBYATTACK,
  FILTERAPIDB,
  FILTERTYPE,
} from "./actionsTypes";

const initialState = {
  getAllPokemons: [],
  backupAllPokemon: [],
  allPokemones: [],
  pokemon: {},
  pokemonDetails: {},
  allTypes: [],
  user: [],
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLPOKEMONS:
      return {
        ...state,
        allPokemones: action.payload,
        error: "",
      };
    case GETALLTYPES:
      return {
        ...state,
        allTypes: action.payload,
        error: "",
      };
    case GETNEXTPAGE:
      return {
        ...state,
        allPokemones: action.payload,
        error: "",
      };
    case GETPREVIOUSPAGE:
      return {
        ...state,
        allPokemones: action.payload,
        error: "",
      };
    case USERLOGIN:
      return {
        ...state,
        user: action.payload,
        error: "",
      };
    case GETPOKEMONID:
      return {
        ...state,
        pokemon: action.payload,
        error: "",
      };
    case DELETEPOKEMONID:
      return {
        ...state,
        pokemon: action.payload,
        error: "",
      };
    case DETAILPOKEMON:
      return {
        ...state,
        pokemonDetails: action.payload,
        error: "",
      };
    case GETPOKEMONSALL: {
      return {
        ...state,
        getAllPokemons: action.payload,
        backupAllPokemon: action.payload,
        error: "",
      };
    }
    case ORDERBYNAME:
      let filtroName = state.getAllPokemons.sort((a, b) => {
        if (action.payload === "A-Z") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });
      return {
        ...state,
        getAllPokemons: filtroName,
        error: "",
      };
    case ORDERBYATTACK:
      return {
        ...state,
        getAllPokemons: state.getAllPokemons.sort((a, b) => {
          if (action.payload === "Minimo") {
            if (a.attack > b.attack) {
              return 1;
            }
            if (b.attack > a.attack) {
              return -1;
            }
            return 0;
          } else {
            if (a.attack > b.attack) {
              return -1;
            }
            if (b.attack > a.attack) {
              return 1;
            }
            return 0;
          }
        }),
        error: "",
      };
    case FILTERAPIDB:
      return {
        ...state,
        getAllPokemons:
          action.payload !== "Todos"
            ? state.backupAllPokemon.filter((poke) => {
                return action.payload === "Api"
                  ? poke.id <= 400
                  : poke.id.length > 4;
              })
            : state.backupAllPokemon,
        error: "",
      };
    case FILTERTYPE:
      return {
        ...state,
        getAllPokemons: state.backupAllPokemon.filter((poke) => {
          return poke.types.includes(action.payload);
        }),
        error: "",
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
