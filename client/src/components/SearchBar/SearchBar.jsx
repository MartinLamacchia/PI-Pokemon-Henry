import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonById, deletePokemonId } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [id, setID] = useState("");

  const handleChange = (e) => {
    setID(e.target.value);
  };

  useEffect(() => {
    if (id === '') {
      setID('')
      dispatch(deletePokemonId());
    }
  }, [id]);

  const handleSearch = () => {
      dispatch(getPokemonById(id));

  }

  return (
    <>
      {location.pathname === "/home" ? (
        <div className={style.container}>
          <input
            type="text"
            value={id}
            id="input-serch"
            onChange={handleChange}
          />
          <button className={style.btnSearch} onClick={() => handleSearch()}>Buscar</button>
        </div>
      ) : (
        <div className={style.divVacio}></div>
      )}
    </>
  );
};

export default SearchBar;