/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/

import Post from "./Post";
import css from "../NewsFeed/NewsFeed.module.css";

const NewsFeed = ({ homeworkList }) => {


    return (

        <ul>
            {/* For CSS test purpose only: */}
            {/* <h2 className={css.Test}>Css Test ||</h2> */}
            {homeworkList.map((homework, index) => [

                <li><Post homework={homework} /></li>,

            ])}
        </ul>
    );
}

export default NewsFeed;