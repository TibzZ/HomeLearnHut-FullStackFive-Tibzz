/*
A Particular piece of homework and all the students involved viewable at a glance

For a particular piece of homework, this displays all the students who it is assigned to.

Each student could be a component, which contains, their name, their avatar and whether they have:
a) not submitted the homework ( e.g.  a cross icon)
b) submitted the homework but is has not been reviwed by teacher ( e.g. a file sheet icon )
c) submitted the homework and it has been approved ( e.g. a tick icon )
*/

import React from 'react';
import Student from './Student';

function MyClassroom({ children }) {


    return (
        <>

            {console.log(children)}

            <h1>My Classroom</h1>

            <ul>

                {children.map((child, index) => [
                    <li><Student name={child.name} avatar={child.avatar} age={5} /></li>,
                ])}
            </ul>


        </>
    );
}

export default MyClassroom;
