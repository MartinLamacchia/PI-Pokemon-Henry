import React from "react";
import Nav from "../../components/Nav/Nav";
import style from "./About.module.css";
import foto from "../../assets/1695499085867.jpg";
import react from "../../assets/React-icon.svg.png";
import redux from "../../assets/redux.png";
import js from "../../assets/JavaScript.png";
import node from "../../assets/node-js.png";
import postgres from "../../assets/postgresql.png";
import sequelize from "../../assets/sequelize.png";

const About = () => {
  return (
    <div className={style.container}>
      <Nav />
      <div className={style.content}>
        <div className={style.contentAll}>
          <div className={style.contentTitle}>
            <h2>Proyecto Individul Henry</h2>
            <img
              src={foto}
              alt="Caricatura del creador de esta pagina"
              className={style.image}
            />
          </div>

          <div className={style.contentText}>
            <p>
              Soy Martín, un apasionado desarrollador que trabaja en su proyecto
              individual en Henry. Mi creación es una emocionante aplicación web
              basada en la API de Pokémon, donde los entrenadores pueden
              explorar el maravilloso mundo Pokémon.
            </p>
          </div>
          <div className={style.contentTitleSkills}>
            <h4>La aplicacion esta hecha con:</h4>
            <div className={style.contentSkills}>
              <ul>
                <li>
                  <img src={react} alt="" />
                  React
                </li>
                <li>
                  <img src={redux} alt="" />
                  Redux
                </li>
                <li>
                  <img src={js} alt="" />
                  JavaScript
                </li>
                <li>
                  <img src={node} alt="" />
                  NodeJS
                </li>
                <li>
                  <img src={postgres} alt="" />
                  Postgres
                </li>
                <li>
                  <img src={sequelize} alt="" />
                  Sequelize
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
