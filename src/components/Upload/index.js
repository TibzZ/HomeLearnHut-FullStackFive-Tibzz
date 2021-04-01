/*
This is opened when the upload button is clicked on the TopBar component

See wireframe for details of this component
*/
import React, { useState } from "react";
import { uploadFile } from "react-s3";
import css from "../Upload/Upload.module.css";
import { children } from "../../libs/children";
import dateFormat from "dateformat";

const {
  REACT_APP_BUCKETNAME,
  REACT_APP_REGION,
  REACT_APP_ACCESS_KEY_ID,
  REACT_APP_SECRET_ACCESS_KEY,
} = process.env;

const config = {
  bucketName: REACT_APP_BUCKETNAME,
  dirName: "placeholder",
  region: REACT_APP_REGION,
  accessKeyId: REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};

const Upload = ({ hideModal, upload }) => {
  const [selectedFile, setSelectedFile] = useState();

  // Controlled components
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [dateDue, setDateDue] = useState("");

  // upload functionality
  const browseClick = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const uploadClick = () => {
    // number for a folder so files cannot overwrite each other with the same name
    config.dirName = Date.now();

    let myDate = new Date(Date.now());
    let formattedDate = dateFormat(myDate.toJSON(), "mmmm dS, yyyy");

    uploadFile(selectedFile, config)
      .then((data) => {
        console.log(
          `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`
        );

        // Testing
        console.log(title);
        console.log(comment);
        console.log(dateDue);

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
      {/* For CSS test purpose only: */}
      <h2 style={{ color: "#dadce1" }} className={css.Test}>
        <br/>
        Upload
      </h2>
      Enter title
      <br />
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <br />
      Comment:
      <br />
      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></input>
      <br />
      Due date:
      <br />
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
