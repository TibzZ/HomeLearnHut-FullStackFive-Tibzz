import css from "./Post.module.css";

const Post = ({ homework, index, clickToClassroom }) => {
  return (
    <div className={css.container}>
    <div className={css.image}>
      <button onClick={(index) => clickToClassroom(index)}>
        <img src={homework.image} alt="homework" />
      </button>
      </div>
      <div className={css.textbox} >
        {homework.name}
        <br />
        {homework.imageUrl}
        <br />
        date set
        <br />
        {homework.dateSet}
        <br />
        date due
        <br />
        {homework.dateDue}
        <br />
      <br />
      Comment:
      {homework.comment}
      <br />
    </div>
    </div>
  );
};

export default Post;
