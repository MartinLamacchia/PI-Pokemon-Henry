import axios from "axios";
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

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemon";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GETALLPOKEMONS,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const getAllTypes = () => {
  const endpoint = "http://localhost:3001/type";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GETALLTYPES,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const getNextPokemons = () => {
  const endpoint = "http://localhost:3001/pokemon/next";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GETPREVIOUSPAGE,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const getPreviousPokemons = () => {
  const endpoint = "http://localhost:3001/pokemon/previous";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GETNEXTPAGE,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const userLogin = (user) => {
  return {
    type: USERLOGIN,
    payload: user,
  };
};

export const getPokemonById = (id) => {
  const endpoint = "http://localhost:3001/pokemon/";
  return async (dispatch) => {
    if (/^[0-9]+$/.test(id)) {
      try {
        const { data } = await axios.get(`${endpoint}${id}`);
        return dispatch({
          type: GETPOKEMONID,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: ERROR,
          payload: error.response.data.message,
        });
      }
    } else {
      try {
        const { data } = await axios.get(`${endpoint}name/?name=${id}`);
        return dispatch({
          type: GETPOKEMONID,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: ERROR,
          payload: error.response.data.message,
        });
      }
    }
  };
};

export const getDetailsPokemon = (id) => {
  const endpoint = "http://localhost:3001/pokemon/detail/";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}${id}`);
      return dispatch({
        type: DETAILPOKEMON,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePokemonId = () => {
  return {
    type: DELETEPOKEMONID,
    payload: {},
  };
};

export const getPokemonsAll = () => {
  const endpoint = "http://localhost:3001/pokemon/all";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GETPOKEMONSALL,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const orderByName = (order) => {
  return {
    type: ORDERBYNAME,
    payload: order,
  };
};

export const orderByAttack = (order) => {
  return {
    type: ORDERBYATTACK,
    payload: order,
  };
};

export const filterApiDB = (filter) => {
  return {
    type: FILTERAPIDB,
    payload: filter,
  };
};

export const filterType = (filter) => {
  return {
    type: FILTERTYPE,
    payload: filter,
  };
};
