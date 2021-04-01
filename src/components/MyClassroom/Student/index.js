//import css from "../Student/Student.module.css";
import React from "react";
import css from "./Student.module.css";
import { TiInputChecked } from "react-icons/ti";

function Student({ handleClick, name, avatar, children }) {
  let tickBoxGreen = "black";
  
  console.log(children);
  function toggleGreenMark(){
      //map through the array
      //check homeworkMarked if it is true change the color of the tickbox to green
    
     children.forEach(child => { if(child.homeworkMarked){
          tickBoxGreen = "green";
     }
       
     });

  }

  // toggleGreenMark();
  
  return (


    <>
      <button className={css.profilebtn} style={{ backgroundImage: `url(${avatar})` }} onClick={handleClick}>
      </button>
      <p className={css.name}>{name}</p>
      <TiInputChecked style={ children[0].homeworkMarked ? { colour:{css.tickBoxValidated}'} : {display : {css.tickBox} } } className={css.tickBox} />
    </>
  );
}

export default Student;
