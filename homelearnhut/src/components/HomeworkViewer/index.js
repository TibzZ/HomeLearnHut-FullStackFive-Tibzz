/*
Views a piece of homework for an individual student.
This is accessed through clicking on a student within the "MyClassroom" component
*/

function HomeworkViewer() {
  const name = "Lucas";
  const setDate = "Yesterday";
  const dueDate = "Tommorow";
  const submissionDate = "Next week";
  const homeworkTitle = "Maths - basic number games";

  return (
    <>
      {name}
      <br />
      Homework: {homeworkTitle}
      <br />
      set: {setDate}
      <br />
      due: {dueDate}
      <br />
      submitted: = {submissionDate}
      <br />
      <br />
      <img
        src="https://www.cdn.geeksforgeeks.org/wp-content/uploads/jobassignment.png"
        alt=""
      />
      <br />
      Homework annotation controls
      <br />
      Comment
      <input></input>
      <br />
      <button>Accept</button>
      <button>Reject</button>
      <br />
      <button>Back</button>
    </>
  );
}

export default HomeworkViewer;
