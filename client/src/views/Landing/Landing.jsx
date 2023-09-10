import React from 'react'
import Nav from '../../components/Nav/Nav'
import style from './Landing.module.css'
import fotoHero from '../../assets/alfabetajuega-pokemon-ash-peores-300917.jpg'
import fotoSectionUno from '../../assets/FotoSection1.jpg'
import fotoSectionDos from '../../assets/FotoSection2.jpg'
import SectionImage from '../../components/SectionImage/SectionImage'
import Footer from '../../components/Footer/Footer'
import InicioSesion from '../../components/InicioSesion/InicioSesion'
import Registro from '../../components/Registro/Registro'
import { useState } from 'react'

function Landing({setUser, user}) {

  const [displayLogin, setDisplayLogin] = useState(false)
  const [displayRegister, setDisplayRegister] = useState(false)
  const [vistaLogin, setVistaLogin] = useState(false)
  const [vistaRegister, setVistaRegister] = useState(false)

  return (
    <div className={style.container}>
      <Nav setDisplayLogin={setDisplayLogin} setDisplayRegister={setDisplayRegister} setVistaLogin={setVistaLogin} setVistaRegister={setVistaRegister} displayLogin={displayLogin} displayRegister={displayRegister} vistaLogin={vistaLogin} vistaRegister={vistaRegister} user={user} setUser={setUser}></Nav>
      <img src={fotoHero} alt="Foto Hero Section" className={style.img}/>
      <section className={style.containerSection}>
        <h3 className={style.titulo}>La trama principal</h3>
        <div className={style.containerSectionImgP}>
          <img src={fotoSectionUno} alt="Foto Seccion Trama" className={style.imgSectionUno}/>
          <div className={style.containerTextTrama}>
            <p>La trama de la primera temporada de Pokémon sigue a un joven entrenador llamado Ash Ketchum (Satoshi en la versión japonesa) en su viaje para convertirse en un Maestro Pokémon. Ash comienza su aventura en el Pueblo Paleta y recibe su primer Pokémon, Pikachu, del Profesor Oak (Profesor Okido en japonés). A lo largo de su viaje, Ash se propone atrapar a todos los Pokémon conocidos, ganar medallas de gimnasio y derrotar a la Liga Pokémon.</p>
            <p>Acompañado por su fiel amigo y Pokémon, Pikachu, Ash se encuentra con varios personajes a lo largo de su viaje. Uno de los personajes más icónicos es Misty (Kasumi en japonés), una entrenadora de tipo agua que se une a Ash después de que él destruye su bicicleta accidentalmente. También se encuentra con Brock (Takeshi en japonés), el líder del Gimnasio de Ciudad Plateada y un experto en tipos roca.</p>
            <p>El principal antagonista de la primera temporada es el Equipo Rocket, compuesto por Jessie, James y Meowth. Su objetivo es robar Pokémon raros y obtener beneficios, lo que los lleva a seguir a Ash en su viaje. Aunque son villanos, su comedia y personalidades exageradas los convierten en personajes queridos por los fans.</p>
          </div>
        </div>
      </section>
      <section className={style.containerSection}>
        <h3 className={style.titulo}>Pokemones Legendarios</h3>
        <div className={style.containerSectionImgP}>
          <div className={style.containerTextLegend}>
            <p>Los Pokémon legendarios son una categoría especial de Pokémon que se distinguen por su rareza, poder y singularidad en el mundo de Pokémon. A diferencia de los Pokémon comunes que se pueden encontrar y atrapar en diversas ubicaciones del juego, los Pokémon legendarios suelen tener una sola aparición única en el juego y a menudo están relacionados con la historia o el mito dentro del universo Pokémon. Aquí tienes una visión general de los Pokémon legendarios:</p>

            <p>1. Rareza y Singularidad: Los Pokémon legendarios son extremadamente raros, lo que significa que generalmente solo hay uno de cada especie en todo el mundo Pokémon. Esto los hace únicos y especiales.</p>

            <p>2. Historia y Mitología: La mayoría de los Pokémon legendarios tienen historias, mitos o leyendas asociadas con ellos en el mundo de Pokémon. Estas historias a menudo se utilizan para enriquecer la narrativa de los juegos y las películas de Pokémon. Por ejemplo, el legendario Mewtwo fue creado mediante experimentos humanos, mientras que Lugia es el guardián de los mares en la mitología Pokémon.</p>

            <p>3. Poder y Estadísticas: Los Pokémon legendarios tienden a tener estadísticas de batalla excepcionales, lo que los convierte en luchadores formidables en combate. Su diseño y habilidades suelen reflejar su estatus legendario y su conexión con elementos míticos o legendarios.</p>

            <p>4. Apariciones en Juegos y Películas: Los Pokémon legendarios suelen ser el objetivo de búsqueda en los juegos principales de Pokémon. Los jugadores deben emprender aventuras épicas para encontrar, desafiar y finalmente atrapar a estos Pokémon. También aparecen en películas de Pokémon, a menudo desempeñando un papel importante en la trama.</p>
          </div>  
          <img src={fotoSectionDos} alt="Foto Seccion Legendarios" className={style.imgSectionDos}/>
        </div>
      </section>
      <div className={style.sectionTres}>
        <SectionImage/>
      </div>
      <Footer/>
      {
        displayRegister ?
      <div className={style.containerModal}>
        <div className={style.containerForm}>
         <Registro setDisplayLogin={setDisplayLogin} setDisplayRegister={setDisplayRegister} setVistaLogin={setVistaLogin} setVistaRegister={setVistaRegister} displayLogin={displayLogin} displayRegister={displayRegister} vistaLogin={vistaLogin} vistaRegister={vistaRegister}/> 
        </div>
      </div>
      : null
      }
      {
        displayLogin ?
      <div className={style.containerModal}>
        <div className={style.containerForm}>
         <InicioSesion setDisplayLogin={setDisplayLogin} setDisplayRegister={setDisplayRegister} setVistaLogin={setVistaLogin} setVistaRegister={setVistaRegister} displayLogin={displayLogin} displayRegister={displayRegister} vistaLogin={vistaLogin} vistaRegister={vistaRegister} setUser={setUser}/> 
        </div>
      </div>
      : null
      }
    </div>
  )
}

export default Landing