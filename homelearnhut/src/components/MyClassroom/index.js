/*
A Particular piece of homework and all the students involved viewable at a glance

For a particular piece of homework, this displays all the students who it is assigned to.

Each student could be a component, which contains, their name, their avatar and whether they have:
a) not submitted the homework ( e.g.  a cross icon)
b) submitted the homework but is has not been reviwed by teacher ( e.g. a file sheet icon )
c) submitted the homework and it has been approved ( e.g. a tick icon )
*/
import React from 'react';

function myClassroom(){


    return(
        <>
        <h1>My Classroom</h1>
        <Student name={"Tom"} age={5}/>
        <Student name={"Jack"} age={6}/>
        <Student name={"Ellie"} age={4}/>
        <Student name={"Jane"} age={7}/>
        <Student name={"Claire"} age={5}/>
        </>
    );
}

export default myClassroom;