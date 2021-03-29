/*
This is opened when the upload button is clicked on the TopBar component

See wireframe for details of this component
*/
import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import css from "../Upload/Upload.module.css";

const { REACT_APP_BUCKETNAME, REACT_APP_REGION, REACT_APP_ACCESS_KEY_ID, REACT_APP_SECRET_ACCESS_KEY } = process.env;

const config = {
    bucketName: REACT_APP_BUCKETNAME,
    dirName: 'placeholder',
    region: REACT_APP_REGION,
    accessKeyId: REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};



const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();


    // upload functionality
    const browseClick = (event) => {
        setSelectedFile(event.target.files[0]);
        // setIsSelected(true);
    };

    const uploadClick = () => {

        // number for a folder so files cannot overwrite each other with the same name
        config.dirName = Date.now();

        uploadFile(selectedFile, config)
            .then((data) => {

                //   console.log(`https://${config.bucketName}.s3.${config.region}.amazonaws.com/${e.target.files[0].name}`);

                console.log(`https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`);

            })
            .catch(
                (err) => { alert(err) }
            )

        //setIsSelected(false);
        setSelectedFile();

        // close popup
        console.log("close popup");

        // dispatch UPLOAD, with the data from the form and the upload URL as payload
        // date set is a timestamp
        // default children added
        // {
        //     name: '',
        //     image: '',
        //     dateSet: '',
        //     dateDue: '',
        //     comment: '',
        //     children:
        //         [...children]
        // }

    }



    return (

        <>
            {/* For CSS test purpose only: */}
            <h2 className={css.Test}>Upload</h2>
            Enter title
            <br />
            <input></input>
            <br />
            Comment:
            <br />
            <input></input>
            <br />
            Due date:
            <br />
            <input></input>
            <br />
            <input type="file" name="file" onChange={browseClick} title="" />
            <br />
            <button onClick={uploadClick}>Submit</button>
        </>
    );
}

export default Upload;