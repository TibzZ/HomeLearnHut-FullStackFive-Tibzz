import { useState, useRef, useEffect } from "react";
import css from "./HomeworkViewer.module.css";
import { UseAppContext } from "../../appContext";
import { useHistory } from "react-router-dom";
import CanvasTools from "./CanvasTools";
import BackButton from "../BackButton";

function HomeworkViewer() {
  const [comment, setComment] = useState("");

  const { state, refreshSwitch, setRefreshSwitch } = UseAppContext();

  const saveableCanvas = useRef(`canvasRef`);
  const history = useHistory();
  const navigateBack = () => history.push("/myClassroom");

  let homework = state.homework[state.homeworkIndex];
  let childHomework =
    state.homework[state.homeworkIndex].children[state.childIndex];

  //load homework annotation if it is there
  useEffect(() => {
    if (childHomework.annotation != null) {
      saveableCanvas.current.loadSaveData(childHomework.annotation, false);
      setComment(childHomework.comment);
    }
  }, [state.childIndex]);

  const BACKEND_URL = "http://localhost:5000";

  async function rejectWork() {
    // Create our object to PUT (Update) into childrenshomework on SQL
    const childrenshomework = {
      id: childHomework.id,
      image: null,
      comment: comment,
      annotation: null,
    };
    putHomework(`/homework/${homework.id}`, "PUT", childrenshomework);
  }

  async function markWork() {
    const childrenshomework = {
      id: childHomework.id,
      image: childHomework.image,
      comment: comment,
      annotation: saveableCanvas.current.getSaveData(),
    };
    // Make the PUT request (UPDATE)
    putHomework(`/homework/${homework.id}`, "PUT", childrenshomework);
  }

  async function putHomework(path, method, body) {
    await fetch(`${BACKEND_URL}${path}`, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  const submitMarking = () => {
    markWork();
    setRefreshSwitch(!refreshSwitch);
    navigateBack();
  };

  const rejectHomework = () => {
    rejectWork();
    setRefreshSwitch(!refreshSwitch);
    navigateBack();
  };

  // Use a PNG for images!
  return (
    <div className={css.allOfViewer}>
      <div className={css.avatarContain}>
        <div className={css.resizePic}>
          <p className={css.childName}>{childHomework.name}</p>
          <p className={css.childName}>
            <img src={childHomework.avatar} alt="avatar" />{" "}
          </p>
          <p>Homework: {homework.name}</p>
        </div>
      </div>
      <div className={css.canvasAndColors}>
        <CanvasTools
          childHomework={childHomework}
          saveableCanvas={saveableCanvas}
        />
        <div>
          <BackButton navigateBack={navigateBack} />
          <div className={css.contain}>
            Set: {homework.dateset}
            <br />
            Due: {homework.datedue}
            <br />
            <span>Comment: </span>
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></input>
          </div>
          <button className={css.myButton} onClick={submitMarking}>
            Mark
          </button>
          <button className={css.myButton} onClick={rejectHomework}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeworkViewer;
