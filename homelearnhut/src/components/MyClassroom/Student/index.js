import React from 'react';
//import avatar from './avatar.PNG'

function Student({ handleClick, name, avatar, age = 5 }) {
    return (
        <>
            <p>Name:{name} </p>
            <p>Age: {age}</p>
            <button onClick={handleClick}><img src={avatar} alt="avatar"></img></button>
            <input type="checkbox"></input>
        </>
    );
}

export default Student;