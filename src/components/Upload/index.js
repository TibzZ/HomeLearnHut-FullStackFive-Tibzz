import React, { useState } from "react";
import { uploadFile as uploadToS3 } from "react-s3";
import css from "../Upload/Upload.module.css";
import { UseAppContext } from "../../appContext";
import { config } from "../../libs/configS3";

const Upload = ({ hideModal }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [dateDue, setDateDue] = useState("");

  const BACKEND_URL = "http://localhost:5000";

  const { refreshSwitch, setRefreshSwitch } = UseAppContext();

  const browseClick = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // S3 Upload
  const uploadClick = () => {
    config.dirName = `homework/${Date.now()}`;
    // S3 upload method
    uploadToS3(selectedFile, config)
      .then(() => {
        // if successful uploading to AWS S3 then insert into SQL homework database
        uploadToSQL({
          name: title,
          image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`,
          datedue: dateDue,
          comment: comment,
        });
      })
      .catch((err) => {
        alert(err);
      });
    setRefreshSwitch(!refreshSwitch);
    hideModal();
  };

  // Upload to SQL...
  async function uploadToSQL() {
    // Create our object to POST (Insert) into Homework on SQL
    const homework = {
      name: title,
      image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`,
      datedue: dateDue,
      comment: comment,
    };
    // Make the POST request (INSERT)
    postHomework("/homework", "POST", homework);
  }

  async function postHomework(path, method, body) {
    // const res =
    await fetch(`${BACKEND_URL}${path}`, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
  }
  // end upload to SQL

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
