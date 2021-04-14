import css from "./Post.module.css";
import dateFormat from "dateformat";

const Post = ({ homework, index, clickToClassroom }) => {
  let mySQLDate = homework.dateset;
  let altDate = new Date(Date.parse(mySQLDate));
  let formattedDate = dateFormat(altDate.toJSON(), "mmmm dS, yyyy");
  // console.log(`this date ${formattedDate}`);

  return (
    <div className={css.container}>
      <div className={css.textbox}>
        <p className={css.dateTitle}>
          <span>{homework.name}</span>
        </p>
        <p className={css.dateSet}>
          <span>Date Set:</span> {formattedDate}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={() => clickToClassroom(index)}>
          <img className={css.image} src={homework.image} alt="homework" />
        </button>
      </div>
      <div className={css.textbox2}>
        <p className={css.dateComment}>
          <span>Comment: {homework.comment}</span>
        </p>
        <p className={css.dateSet}>
          <span>Date Due:</span> {homework.datedue}
        </p>
      </div>
    </div>
  );
};

export default Post;
