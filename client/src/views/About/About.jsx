import React from 'react'
import Nav from '../../components/Nav/Nav'
import style from './About.module.css'
import fondoAbout from '../../assets/FondoAbout.jpg'

const About = () => {
  return (
    <div className={style.container}>
      <Nav/>
      <div className={style.content}></div>
    </div>
  )
}

export default About