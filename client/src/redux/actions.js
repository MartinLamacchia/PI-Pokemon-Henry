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
  };
};

export const deletePokemonId = () => {
  return {
    type: DELETEPOKEMONID,
    payload: {},
  };
};
