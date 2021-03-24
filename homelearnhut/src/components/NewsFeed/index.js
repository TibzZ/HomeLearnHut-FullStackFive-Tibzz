/*
NewsFeed contains a list of "Posts" which are essentially.

A piece of homework.

A piece of homework in this list can be clicked to lead to the "MyClassroom" page (state/route)
*/
const NewsFeed = () => {
    return NewsFeed(

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