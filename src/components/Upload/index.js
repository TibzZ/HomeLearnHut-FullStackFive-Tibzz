import React, { useState } from "react";
import { uploadFile } from "react-s3";
import css from "../Upload/Upload.module.css";
import { blankClassroom as children } from "../../libs/data/blankClassroom";
import dateFormat from "dateformat";
import { UseAppContext } from "../../appContext";
import * as actions from "../../libs/actions";
import { config } from "../../configS3";

const Upload = ({ hideModal }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [dateDue, setDateDue] = useState("");
  const { dispatch } = UseAppContext();

  function upload(payload) {
    dispatch({ type: actions.UPLOAD, payload: payload });
  }

  const browseClick = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadClick = () => {
    config.dirName = `homework/${Date.now()}`;

    let myDate = new Date(Date.now());
    let formattedDate = dateFormat(myDate.toJSON(), "mmmm dS, yyyy");

    uploadFile(selectedFile, config)
      .then(() => {
        upload({
          name: title,
          image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`,
          dateSet: formattedDate,
          dateDue: dateDue,
          comment: comment,
          children: [...children],
        });
      })
      .catch((err) => {
        alert(err);
      });
    hideModal();
  };

  return (
    <div className={css.uploadBox}>
      <h2 className={css.upload}>Upload</h2>
      <p>Enter title</p>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <p>Comment:</p>
      <textarea
        className={css.commentBox}
        rows="3"
        name="comment"
        form="usrform"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      >
        Enter text here...
      </textarea>
      <p>Due date: </p>
      <input
        value={dateDue}
        onChange={(event) => setDateDue(event.target.value)}
      ></input>
      <br />
      <input type="file" name="file" onChange={browseClick} title="" />
      <br />
      <button className={css.submitBtn} onClick={uploadClick}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
