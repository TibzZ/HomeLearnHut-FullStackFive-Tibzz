const Post = ({ homework, index, clickToClassroom }) => {
  return (
    <>
      <button onClick={(index) => clickToClassroom(index)}>
        <img src={homework.image} alt="homework" />
      </button>
      <div>
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
      </div>
      <br />
      Comment:
      {homework.comment}
      <br />
    </>
  );
};

export default Post;
