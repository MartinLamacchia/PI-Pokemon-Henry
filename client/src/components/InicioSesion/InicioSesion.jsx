import React, { useState } from "react";
import style from "./InicioSesion.module.css";
import candadoAbierto from "../../assets/candado-abierto.png";
import candadoCerrado from "../../assets/candado-cerrado.png";
import usuario from "../../assets/usuario (3).png";
import { useNavigate } from "react-router-dom";
import validarLogin from "./validarLogin";
import axios from "axios";
import { userLogin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ModalLanding from "../Modal/ModalLanding";

const InicioSesion = ({
  setDisplayLogin,
  setDisplayRegister,
  setVistaLogin,
  setVistaRegister,
  displayLogin,
  displayRegister,
  vistaLogin,
  vistaRegister,
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const handlerCloseLogin = () => {
    setDisplayLogin(!displayLogin);
    setVistaLogin(!vistaLogin);
  };

  const handlerRegister = () => {
    setDisplayLogin(!displayLogin);
    setVistaLogin(!vistaLogin);
    setDisplayRegister(!displayRegister);
    setVistaRegister(!vistaRegister);
  };

  const handleShow = () => {
    setType("text");
    setShow(!show);
  };

  const handleNoShow = () => {
    setType("password");
    setShow(!show);
  };

  const handleChange = (e) => {
    const propiedad = e.target.name;
    const valor = e.target.value;

    setForm({ ...form, [propiedad]: valor });
    setError(validarLogin({ ...form, [propiedad]: valor }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios(
        `http://localhost:3001/users/?email=${form.email}&password=${form.password}`
      );
      if (data.access === true) {
        setModal(false);
        navigate("/home");
        dispatch(userLogin([{ email: form.email, password: form.password }]));
      }
    } catch (error) {
      if (error.response.data.message) {
        setModal(true);
      }
    }
  };


  return (
    <>
      <div className={style.container}>
        <button className={style.btnCloseModal} onClick={handlerCloseLogin}>
          X
        </button>
        <form action="" onSubmit={handlerSubmit}>
          <h2>Iniciar Sesion</h2>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <img src={usuario} alt="" className={style.img} />
            <span className={style.span}>{error.email}</span>
          </div>
          <div className={style.inputBox}>
            <input
              type={type}
              placeholder="Contraseña"
              required
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
            />
            {!show ? (
              <img
                src={candadoCerrado}
                alt=""
                className={style.img}
                onClick={handleShow}
              />
            ) : (
              <img
                src={candadoAbierto}
                alt=""
                className={style.img}
                onClick={handleNoShow}
              />
            )}
            <span className={style.span}>{error.password}</span>
          </div>
          <button className={style.btn}>Iniciar Sesion</button>
          <div className={style.registerLink}>
            <p>
              Aun no tiene una cuenta?{" "}
              <a href="#" onClick={handlerRegister}>
                Registrarse
              </a>
            </p>
          </div>
        </form>
      </div>
      {modal && (
        <div className={style.containerModal}>
          <ModalLanding f={modal} text="Usuario no encontrado" setModal={setModal} setVistaLogin={setVistaLogin} setDisplayLogin={setDisplayLogin}/>
        </div>
      )}
    </>
  );
};

export default InicioSesion;
