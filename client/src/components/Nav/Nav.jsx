import React from "react";
import logo from "../../assets/International_Pokémon_logo.svg.png";
import Botones from "../Botones/Botones";
import style from "./Nav.module.css";
import cerrarSecion from '../../assets/cerrar-sesion (2).png'
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({
  setDisplayLogin,
  setDisplayRegister,
  setVistaLogin,
  setVistaRegister,
  displayLogin,
  displayRegister,
  vistaLogin,
  vistaRegister,
}) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  

  const handleLogout = () => {
    navigate('/')
    dispatch(userLogin([]))
  }

  return (
    <div className={style.container}>
      <img src={logo} alt="Logo Pokemon" className={style.img} />
      <div>
        {!user.length > 0 ? (
          <div className={style.containerBtnNoUser}>
            <Botones
              id="login"
              name="Iniciar Secion"
              setDisplayLogin={setDisplayLogin}
              displayLogin={displayLogin}
              setVistaLogin={setVistaLogin}
              vistaLogin={vistaLogin}
            />
            <Botones
              id="register"
              name="Registrarse"
              setDisplayRegister={setDisplayRegister}
              displayRegister={displayRegister}
              setVistaRegister={setVistaRegister}
              vistaRegister={vistaRegister}
            />
          </div>
        ) : 
        (
          <div className={style.containerBtnUser}>
            <Botones name='Buscar'/>
            <Botones name='About'/>
            <Botones name='Crear Pokemon'/>
            <button id="cerrarSesion" onClick={handleLogout} className={style.btnLogout}>
            <img src={cerrarSecion} alt="Cerrar Sesion" id="cerrarSesion"/>
            </button>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default Nav;
