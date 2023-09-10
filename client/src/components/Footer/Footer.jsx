import React from "react";
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <a href="https://github.com/MartinLamacchia?tab=repositories" target="_blank">
          <img src={github} alt="icono-github" width="40px" className={style.img}/>
        </a>
        <a href="www.linkedin.com/in/martin-lamacchia-a1622726b" target="_blank">
          <img src={linkedin} alt="icono-linkedin" width="47px" className={style.img}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="icono-instagram" width="47px" className={style.img}/>
        </a>
      </div>
      <div className={style.marca}>
        <p>
          &copy;
          <a className={style.gitHub}
            href="https://github.com/MartinLamacchia?tab=repositories"
            target="_blank"
          >
            Pagina creada por Martin Lamacchia
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
