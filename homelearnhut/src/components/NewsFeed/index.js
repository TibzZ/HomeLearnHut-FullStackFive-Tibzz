/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/

import Post from "./Post";

const NewsFeed = ({ homeworkList }) => {


    return (

        <ul>

            {homeworkList.map((homework, index) => [

                <li><Post homework={homework} /></li>,

            ])}
        </ul>
    );
}

export default NewsFeed;