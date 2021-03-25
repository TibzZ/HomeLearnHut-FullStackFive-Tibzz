import React from 'react';
//import avatar from './avatar.PNG'

function Student({ name, avatar, age = 5 }) {
    return (
        <>
            <p>Name:{name} </p>
            <p>Age: {age}</p>
            <img src={avatar} alt="avatar"></img>
            <input type="checkbox"></input>
        </>
    );
}

export default Student;