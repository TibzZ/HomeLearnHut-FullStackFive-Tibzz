//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import { TiInputChecked } from "react-icons/ti";

function Student({ handleClick, name, avatar, hasSubmitted, isMarked, index }) {
  return (
    <>
      <button
        data-testid="clickavatar"
        className={css.profilebtn}
        style={
          hasSubmitted
            ? { backgroundImage: `url(${avatar})` }
            : { backgroundImage: `url(${avatar})` }
        }
        onClick={() => handleClick(index)}
        disabled={!hasSubmitted}
      ></button>
      <p className={css.name}>{name}</p>

      {isMarked ? (
        <TiInputChecked style={{ color: "green" }} className={css.tickBox} />
      ) : null}
    </>
  );
}

export default Student;
