//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import { TiInputChecked } from "react-icons/ti";


function Student({ handleClick, name, avatar }) {

  return (


    <>
      <button className={css.profilebtn} style={{ backgroundImage: `url(${avatar})` }} onClick={handleClick}>
        {console.log(avatar)}
      </button>
      <p>Name:{name} </p>
      <br />

      <TiInputChecked
        color="lightgrey"
        size="40px"
        style={{ marginTop: "-10px" }}
      />

    </>

  );
}

export default Student;
