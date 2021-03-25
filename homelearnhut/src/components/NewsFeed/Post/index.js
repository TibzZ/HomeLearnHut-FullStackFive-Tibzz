const Post
    = ({ homework }) => {
        return (

            <>
                {homework.name}
                <br />
                {homework.imageUrl}
                <img src={homework.image} />
                <br />
                date set<br />
                {homework.dateSet}
                <br />
                date due<br />
                {homework.dateDue}
                <br />
                Comment:
                <br />
                {homework.comment}<br />
                <button>Inspect</button>

            </>
        );
    }

export default Post
    ;