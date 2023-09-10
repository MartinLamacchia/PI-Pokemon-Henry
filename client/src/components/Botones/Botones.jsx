import React from 'react'
import style from './Botones.module.css'

const Botones = ({name, id, setDisplayLogin, setDisplayRegister, setVistaLogin, setVistaRegister, displayLogin, displayRegister, vistaLogin, vistaRegister}) => {

  const handlerLoginRegister = (e) => {
    e.target.id === "login" &&  setDisplayLogin(!displayLogin)
    e.target.id === 'login' && setVistaLogin(!vistaLogin)
    e.target.id === 'register' && setDisplayRegister(!displayRegister)
    e.target.id === 'register' && setVistaRegister(!vistaRegister)
  }

  return (
    <>
      <button id={id} onClick={handlerLoginRegister} className={style.botones}>{name}</button>
    </>
  )
}

export default Botones