import {
  GETALLPOKEMONS,
  GETALLTYPES,
  GETNEXTPAGE,
  GETPREVIOUSPAGE,
  USERLOGIN,
} from "./actionsTypes";

const initialState = {
  allPokemones: [],
  allTypes: [],
  user: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLPOKEMONS:
      return {
        ...state,
        allPokemones: action.payload,
      };
    case GETALLTYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
    case GETNEXTPAGE:
      return {
        ...state,
        allPokemones: action.payload,
      };
    case GETPREVIOUSPAGE:
      return {
        ...state,
        allPokemones: action.payload,
      };
    case USERLOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
