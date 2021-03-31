import css from "./Post.module.css";

const Post = ({ homework, index, clickToClassroom }) => {
  return (
    <div className={css.container}>
       <div className={css.textbox}>
        {homework.name}
        <br />
        date set:  {homework.dateSet}
        <br />
        {homework.imageUrl}
        <br />
        </div>
      <div className={css.image}>
        <button onClick={(index) => clickToClassroom(index)}>
          <img src={homework.image} alt="homework" />
        </button>
      </div>
        <div className={css.textbox2}>
        Comment:
        {homework.comment}
        <br />
        date due: {homework.dateDue}
        <br />
      </div>
    </div>
  );
};

export default Post;
