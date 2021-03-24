import React from 'react';
import avatar from './avatar.PNG'

function Student({ name, age }){
    return(
        <>
        <p>Name:{name} </p>
        <p>Age: {age}</p>
        <img src={avatar} alt="avatar"></img>
        <input type="checkbox"></input>
        </>
    );
}

export default Student;