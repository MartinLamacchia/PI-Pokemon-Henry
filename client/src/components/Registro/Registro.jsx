import axios from "axios";
import React from "react";
import style from "./Registro.module.css";
import candadoAbierto from "../../assets/candado-abierto.png";
import candadoCerrado from "../../assets/candado-cerrado.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validarRegistro from "./validarRegisto";
import ModalLanding from "../Modal/ModalLanding";

const Registro = ({
  setDisplayLogin,
  setDisplayRegister,
  setVistaLogin,
  setVistaRegister,
  displayLogin,
  displayRegister,
  vistaLogin,
  vistaRegister,
}) => {
  const [form, setForm] = useState({});

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const [modalRegistro, setModalRegistro] = useState(false);
  const [modalFallo, setModalFallo] = useState(false);

  const handlerCloseRegister = () => {
    setDisplayRegister(!displayRegister);
    setVistaRegister(!vistaRegister);
  };

  const handlerLogin = () => {
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
    setError(validarRegistro({ ...form, [propiedad]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3001/users", form);
      setModalRegistro(true)
    } catch (error) {
      if (error.response.data.message) {
        setModalFallo(true);
      }
    }

  };

  return (
    <>
      <div className={style.wrapper}>
        <button className={style.btnCloseModal} onClick={handlerCloseRegister}>
          X
        </button>
        <form action="" onSubmit={handleSubmit}>
          <h2>Registrarse</h2>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className={style.span}>{error.name}</span>
          </div>
          <div className={style.inputBox}>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              name="nameUser"
              required
              value={form.nameUser}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className={style.span}>{error.nameUser}</span>
          </div>
          <div className={style.inputBox}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
            />
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
          <button className={style.btn}>Registrate</button>
          <div className={style.registerLink}>
            <p>
              Ya tiene una cuenta?{" "}
              <a href="#" onClick={handlerLogin}>
                Iniciar Sesion
              </a>
            </p>
          </div>
        </form>
      </div>
      {modalRegistro && (
        <div className={style.containerModal}>
          <ModalLanding
            v={modalRegistro}
            text="Usuario registrado"
            setModal={setModalRegistro}
            setDisplayRegister={setDisplayRegister}
            setVistaRegister={setVistaRegister}
          />
        </div>
      )}
      {modalFallo && (
        <div className={style.containerModal}>
          <ModalLanding
            f={modalFallo}
            text="Usuario ya registrado"
            setModal={setModalFallo}
            setDisplayRegister={setDisplayRegister}
            setVistaRegister={setVistaRegister}
          />
        </div>
      )}
    </>
  );
};

export default Registro;
