import css from "./Post.module.css";

const Post = ({ homework, index, clickToClassroom }) => {
  return (
    <div className={css.container}>
      <div className={css.textbox}>
        {homework.name}
        <br />
        Date Set:  {homework.dateSet}
        <br />
      </div>
      <div className={css.image}>
        <button onClick={(index) => clickToClassroom(index)}>
          <img src={homework.image} alt="homework" />
        </button>
      </div>
      <div className={css.textbox2}>
        Comment: {homework.comment}
        <br />
        Date Due: {homework.dateDue}
        <br />
      </div>
    </div>
  );
};

export default Post;
