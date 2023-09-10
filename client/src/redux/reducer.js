import { GETALLPOKEMONS, GETALLTYPES } from "./actionsTypes";

const initialState = {
  allPokemones: [],
  allTypes: [],
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
    default:
      return state;
  }
};

export default rootReducer;
