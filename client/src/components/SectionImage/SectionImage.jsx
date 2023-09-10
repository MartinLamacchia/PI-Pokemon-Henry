import React from 'react'
import pikachu from '../../assets/Pikachu.png'
import bulbasaur from '../../assets/Bulbasaur.png'
import ash from '../../assets/Ash.png'
import squirtle from '../../assets/Squirtle.png'
import charmander from '../../assets/Charmander.png'
import brock from '../../assets/Brock.png'
import charizard from '../../assets/Charizard.png'
import snorlax from '../../assets/snorlax.png'
import misty from '../../assets/Misty.png'
import style from './SectionImage.module.css'

const SectionImage = () => {
  return (
    <section className={style.container}>
      <img src={brock} alt="" className={style.img} />
      <img src={charizard} alt="" className={style.img} />
      <img src={pikachu} alt="" className={style.img} />
      <img src={bulbasaur} alt="" className={style.img} />
      <img src={ash} alt="" className={style.img} />
      <img src={squirtle} alt="" className={style.img} />
      <img src={charmander} alt="" className={style.img} />
      <img src={snorlax} alt="" className={style.img} />
      <img src={misty} alt="" className={style.img} />
    </section>
  )
}

export default SectionImage