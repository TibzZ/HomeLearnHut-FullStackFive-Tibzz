import css from "./Post.module.css";

const Post = ({ homework, index, clickToClassroom }) => {
  return (
    <div className={css.container}>
      <div className={css.textbox}>
        {homework.name}
        <p className={css.dateSet}>
          <span> Date Set: {homework.dateSet} </span>
        </p>
      </div>
      <div>
        <button
          className={css.button}
          onClick={(index) => clickToClassroom(index)}
        >
          <img className={css.image} src={homework.image} alt="homework" />
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
