import React from "react";
import s from "./Home.module.css";
import fotocv from "../../photos/FranFOTOCV.png";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("ESP");
  const changeLang=()=>{
    if(language==="ESP"){

        setLanguage("ENG")
        return
    }
    setLanguage("ESP")

  }

  return (
    <div className={s.backround}>
      <div className={s.navBar}>
        <div></div>
        <div className={s.navBarTopics}>
          <h5 className={s.topics}>About</h5>
          <h5 className={s.topics}>Proyectos</h5>
          <h5 className={s.topics}>Tecnologias</h5>
          <h5 className={s.topics}>Curriculum</h5>
          <h5 className={s.topics}>Contacto</h5>
        </div>
      </div>
      <div style={{"display":"flex", "flexDirection":"row",}}>
        <p>Change the language</p>
        <button onClick={changeLang}>{language}</button>
      </div>
      <div className={s.container}>
        <img className={s.image} src={fotocv} alt="FranciscoFuhr" />
        <div>
          <h5 className={s.name}>Francisco Fuhr</h5>
          <h5 className={s.fsd}>Full Stack Developer</h5>
        </div>
      </div>
      <div>
        <div className={s.about}>
        <div className={s.aboutcontainer}>
          <h4 className={s.title} style={{"marginLeft":"80px"}}>¿Quien soy?</h4>
        <p>
          Full Stack Developer con experiencia trabajando en NodeJS, React,
          Redux, SQL entre otras tecnologías del sector. Apasionado por la
          programación. Con pensamiento creativo, resolución de problemas,
          trabajo en equipo, comunicación y autonomía.
        </p>
        </div>
      </div>
      <h4 className={s.titleAlone} >Proyectos</h4>

        </div>
    <div>

    </div>
    <div>
    <h4 className={s.titleAlone} >Tecnologias</h4>
    <div className={s.containerTech}>

      <div className={s.containerPics}>
        <div className={s.react}></div>
        <div className={s.node}></div>
        <div className={s.java}></div>
        <div className={s.sql}></div>
        <div className={s.html}></div>
        <div className={s.css}></div>
        <div className={s.git}></div>
      </div>
    </div>

    </div>
    </div>
  );
}
