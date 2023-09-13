import {
  GETALLPOKEMONS,
  GETALLTYPES,
  GETNEXTPAGE,
  GETPREVIOUSPAGE,
  USERLOGIN,
  GETPOKEMONID,
  DELETEPOKEMONID,
  ERROR,
} from "./actionsTypes";

const initialState = {
  allPokemones: [],
  pokemon: {},
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
