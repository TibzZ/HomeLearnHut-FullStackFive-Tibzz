/*
Once logged in (have gone through the landing page or previously logged in) the TopBar is displayed on all pages (states/routes)

It says the name, a logo which can be clicked to take to the news feed ( similar to how Facebook operates)

It also has a button that opens the upload box...

It says who is logged in, (perhaps even an avatar), and has a logout button
*/
const TopBar = () => {
    return (
        <>
            HomeWork Hut (Logo)<button onClick={console.log("need to implement upload functionality")}>Upload</button><button>Logout</button>
        </>
    );
}

export default TopBar;