import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import style from "./CreatePokemon.module.css";
import Card from "../../components/Card/Card";
import validarPostPokemon from "./validarPostPokemon";
import axios from 'axios'
import ModalCreate from "../../components/Modal/ModalCreate";

const CreatePokemon = () => {
  const allTypes = useSelector((state) => state.allTypes);

  // Estados para opacidad de botones types
  const [ground, setGround] = useState(false);
  const [fire, setFire] = useState(false);
  const [ice, setIce] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [poison, setPoison] = useState(false);
  const [rock, setRock] = useState(false);
  const [water, setWater] = useState(false);
  const [dragon, setDragon] = useState(false);
  const [flying, setFlying] = useState(false);
  const [bug, setBug] = useState(false);
  const [grass, setGrass] = useState(false);
  const [dark, setDark] = useState(false);
  const [fighting, setFighting] = useState(false);
  const [steel, setSteel] = useState(false);
  const [psychic, setPsychic] = useState(false);
  const [unknown, setUnknown] = useState(false);
  const [normal, setNormal] = useState(false);
  const [ghost, setGhost] = useState(false);
  const [electric, setElectric] = useState(false);
  const [fairy, setFairy] = useState(false);
  
  // Estado ventana Modal 
  const [registro, setRegistro] = useState(false)


  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    speed: "",
    height: "",
    weight: "",
    attack: "",
    defense: "",
    types: [],
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    hp: "",
    speed: "",
    height: "",
    weight: "",
    attack: "",
    defense: "",
  });

  // Funciones para completar el formulario
  const handleChange = (e) => {
    e.preventDefault();
    const propiedad = e.target.name;
    const valor = e.target.value;

    setForm({ ...form, [propiedad]: valor });
    setError(validarPostPokemon({ ...form, [propiedad]: valor }, error));
  };

  // Esta ademas controla los estados de los botones
  const handlerClickBtnType = (e) => {
    e.preventDefault();

    const valor = e.target.value;

    if (!form.types.includes(valor) && form.types.length < 3) {
      setForm((prevForm) => ({
        ...prevForm,
        types: [...prevForm.types, valor],
      }));
      valor === "Ground" && setGround(true);
      valor === "Fire" && setFire(true);
      valor === "Ice" && setIce(true);
      valor === "Shadow" && setShadow(true);
      valor === "Poison" && setPoison(true);
      valor === "Rock" && setRock(true);
      valor === "Water" && setWater(true);
      valor === "Dragon" && setDragon(true);
      valor === "Flying" && setFlying(true);
      valor === "Bug" && setBug(true);
      valor === "Grass" && setGrass(true);
      valor === "Dark" && setDark(true);
      valor === "Fighting" && setFighting(true);
      valor === "Steel" && setSteel(true);
      valor === "Psychic" && setPsychic(true);
      valor === "Unknown" && setUnknown(true);
      valor === "Normal" && setNormal(true);
      valor === "Ghost" && setGhost(true);
      valor === "Electric" && setElectric(true);
      valor === "Fairy" && setFairy(true);
    } else if (form.types.includes(valor)) {
      const newTypes = form.types.filter((e) => e !== valor);
      setForm((prevForm) => ({
        ...prevForm,
        types: newTypes,
      }));
      valor === "Ground" && setGround(false);
      valor === "Fire" && setFire(false);
      valor === "Ice" && setIce(false);
      valor === "Shadow" && setShadow(false);
      valor === "Poison" && setPoison(false);
      valor === "Rock" && setRock(false);
      valor === "Water" && setWater(false);
      valor === "Dragon" && setDragon(false);
      valor === "Flying" && setFlying(false);
      valor === "Bug" && setBug(false);
      valor === "Grass" && setGrass(false);
      valor === "Dark" && setDark(false);
      valor === "Fighting" && setFighting(false);
      valor === "Steel" && setSteel(false);
      valor === "Psychic" && setPsychic(false);
      valor === "Unknown" && setUnknown(false);
      valor === "Normal" && setNormal(false);
      valor === "Ghost" && setGhost(false);
      valor === "Electric" && setElectric(false);
      valor === "Fairy" && setFairy(false);
    }
  };

  // Peticion POST al Back
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await axios.post('http://localhost:3001/pokemon', form)
      if (data.message === 'Registro exitoso') {
        setRegistro(!registro)
      }

    } catch (error) {
      window.alert('Se ha caido el servidor')
    }
  }

  console.log(form);

  return (
    <div className={style.container}>
      <Nav />
      <div className={style.contentAll}>
        <Card
          key="DB"
          id="DB"
          name={form.name}
          image={form.image}
          hp={form.hp}
          speed={form.speed}
          height={form.height}
          weight={form.weight}
          attack={form.attack}
          defense={form.defense}
          types={form.types}
          errors={error}
        />
        {/* <div className={style.containerForm}> */}
        <form action="" className={style.containerForm} onSubmit={handleSubmit}>
          <h2>Crear un Pokemon</h2>
          <div className={style.containerNameImage}>
            <div className={style.containerName}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                required
              />
            </div>
            <div className={style.containerImage}>
              <label htmlFor="image">Imagen</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                value={form.image}
                required
              />
            </div>
          </div>
          <div className={style.containerStats}>
            <div className={style.containerHpSpeed}>
              <div className={style.containerHp}>
                <label htmlFor="hp">Vida</label>
                <input
                  type="text"
                  name="hp"
                  onChange={handleChange}
                  value={form.hp}
                  required
                />
              </div>
              <div className={style.containerSpeed}>
                <label htmlFor="speed">Velocidad</label>
                <input
                  type="text"
                  name="speed"
                  onChange={handleChange}
                  value={form.speed}
                  required
                />
              </div>
            </div>
            <div className={style.containerHeightWeight}>
              <div className={style.containerHeight}>
                <label htmlFor="height">Altura</label>
                <input
                  type="text"
                  name="height"
                  onChange={handleChange}
                  value={form.height}
                  required
                />
              </div>
              <div className={style.containerWeight}>
                <label htmlFor="weight">Peso</label>
                <input
                  type="text"
                  name="weight"
                  onChange={handleChange}
                  value={form.weight}
                  required
                />
              </div>
            </div>
          </div>
          <div className={style.containerTitleTypes}>
            <h4>Tipos (Maximo: 3)</h4>
            <div className={style.containerType}>
              {allTypes?.map((type) => (
                <button
                  className={
                    type.name === "Ground" && ground
                      ? style.groundNull
                      : type.name === "Ground"
                      ? style.ground
                      : type.name === "Fire" && fire
                      ? style.fireNull
                      : type.name === "Fire"
                      ? style.fire
                      : type.name === "Ice" && ice
                      ? style.iceNull
                      : type.name === "Ice"
                      ? style.ice
                      : type.name === "Shadow" && shadow
                      ? style.shadowNull
                      : type.name === "Shadow"
                      ? style.shadow
                      : type.name === "Poison" && poison
                      ? style.poisonNull
                      : type.name === "Poison"
                      ? style.poison
                      : type.name === "Rock" && rock
                      ? style.rockNull
                      : type.name === "Rock"
                      ? style.rock
                      : type.name === "Water" && water
                      ? style.waterNull
                      : type.name === "Water"
                      ? style.water
                      : type.name === "Dragon" && dragon
                      ? style.dragonNull
                      : type.name === "Dragon"
                      ? style.dragon
                      : type.name === "Flying" && flying
                      ? style.flyingNull
                      : type.name === "Flying"
                      ? style.flying
                      : type.name === "Bug" && bug
                      ? style.bugNull
                      : type.name === "Bug"
                      ? style.bug
                      : type.name === "Grass" && grass
                      ? style.grassNull
                      : type.name === "Grass"
                      ? style.grass
                      : type.name === "Dark" && dark
                      ? style.darkNull
                      : type.name === "Dark"
                      ? style.dark
                      : type.name === "Fighting" && fighting
                      ? style.fightingNull
                      : type.name === "Fighting"
                      ? style.fighting
                      : type.name === "Steel" && steel
                      ? style.steelNull
                      : type.name === "Steel"
                      ? style.steel
                      : type.name === "Psychic" && psychic
                      ? style.psychicNull
                      : type.name === "Psychic"
                      ? style.psychic
                      : type.name === "Unknown" && unknown
                      ? style.unknownNull
                      : type.name === "Unknown"
                      ? style.unknown
                      : type.name === "Normal" && normal
                      ? style.normalNull
                      : type.name === "Normal"
                      ? style.normal
                      : type.name === "Ghost" && ghost
                      ? style.ghostNull
                      : type.name === "Ghost"
                      ? style.ghost
                      : type.name === "Electric" && electric
                      ? style.electricNull
                      : type.name === "Electric"
                      ? style.electric
                      : type.name === "Fairy" && fairy
                      ? style.fairyNull
                      : type.name === "Fairy"
                      ? style.fairy
                      : null
                  }
                  value={type.name}
                  onClick={handlerClickBtnType}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
          <div className={style.containerAttackDefense}>
            <div className={style.containerAttack}>
              <label htmlFor="attack">Ataque</label>
              <input
                type="text"
                name="attack"
                onChange={handleChange}
                value={form.attack}
                required
              />
            </div>
            <div className={style.containerDefense}>
              <label htmlFor="defense">Defensa</label>
              <input
                type="text"
                name="defense"
                onChange={handleChange}
                value={form.defense}
                required
              />
            </div>
          </div>
          <button className={style.btnCreate}>Crear Pokemon</button>
        </form>
        {/* </div> */}
        {
          registro &&
          <div className={style.containerModal}>
          <ModalCreate v={registro}/>
          </div>
        }
      </div>
    </div>
  );
};

export default CreatePokemon;
