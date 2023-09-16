import axios from 'axios'
import React from 'react'
import style from './Registro.module.css'
import candadoAbierto from '../../assets/candado-abierto.png'
import candadoCerrado from '../../assets/candado-cerrado.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import validarRegistro from './validarRegisto'

const Registro = ({setDisplayLogin, setDisplayRegister, setVistaLogin, setVistaRegister, displayLogin, displayRegister, vistaLogin, vistaRegister}) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [type, setType] = useState('password')
  const [show, setShow] = useState(false)

  const handlerCloseRegister = () => {
    setDisplayRegister(!displayRegister)
    setVistaRegister(!vistaRegister)
  }

  const handlerLogin = () => {
    setDisplayLogin(!displayLogin)
    setVistaLogin(!vistaLogin)
    setDisplayRegister(!displayRegister)
    setVistaRegister(!vistaRegister)
  }

  const handleShow = () => {
    setType('text')
    setShow(!show)
  }

  const handleNoShow = () => {
    setType('password')
    setShow(!show)
  }

  const handleChange = (e) => {
    const propiedad = e.target.name;
    const valor = e.target.value;

    setForm({ ...form, [propiedad]: valor });
    setError(validarRegistro({ ...form, [propiedad]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/users', form)
      console.log('Registro exitoso', response);
    } catch (error) {
      console.log(error);
    }

    setDisplayRegister(!displayRegister)
    setVistaRegister(!vistaRegister)
  }


  return (
    <div className={style.wrapper}>
      <button className={style.btnCloseModal} onClick={handlerCloseRegister}>X</button>
      <form action="" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        <div className={style.inputBox}>
          <input type="text" placeholder='Nombre' name='name' required value={form.name} onChange={handleChange} autoComplete="off"/>
          <span className={style.span}>{error.name}</span>
        </div>
        <div className={style.inputBox}>
          <input type="text" placeholder='Nombre de Usuario' name='nameUser' required value={form.nameUser} onChange={handleChange} autoComplete="off"/>
          <span className={style.span}>{error.nameUser}</span>
        </div>
        <div className={style.inputBox}>
          <input type="email" placeholder='Email' required name='email' value={form.email} onChange={handleChange} autoComplete="off"/>
          <span className={style.span}>{error.email}</span>
        </div>
        <div className={style.inputBox}>
          <input type={type} placeholder='Contraseña' required name='password' value={form.password} onChange={handleChange} autoComplete="off"/>
          {
            !show ? 
            <img src={candadoCerrado} alt="" className={style.img} onClick={handleShow}/> :
            <img src={candadoAbierto} alt="" className={style.img} onClick={handleNoShow}/>
          }
          <span className={style.span}>{error.password}</span>
        </div>
        <button className={style.btn}>Registrate</button>
        <div className={style.registerLink}>
          <p>Ya tiene una cuenta? <a href="#" onClick={handlerLogin}>Iniciar Sesion</a></p>
        </div>
      </form>
    </div>
  )
}

export default Registro