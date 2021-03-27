const Post
    = ({ homework, index, clickToClassroom }) => {
        return (

            <>
                <div>
                    {homework.name}
                    <br />
                    {homework.imageUrl}
                    <br />
                    date set<br />
                    {homework.dateSet}
                    <br />
                    date due<br />
                    {homework.dateDue}
                    <br />
                </div>
                <button onClick={(index) => clickToClassroom(index)}><img src={homework.image} alt="homework"/></button>
                <br />
                Comment:
                {homework.comment}<br />

            </>
        );
    }

export default Post
    ;