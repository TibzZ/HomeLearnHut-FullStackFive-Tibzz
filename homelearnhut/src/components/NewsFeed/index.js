/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/

import Post from "./Post";

const NewsFeed = () => {
    return (

        <ul>
            <li>
                <Post />
            </li>
            <li>
                <Post />
            </li>
        </ul>
    );
}

export default NewsFeed;