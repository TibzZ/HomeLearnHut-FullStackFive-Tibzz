/*
This is opened when the upload button is clicked on the TopBar component

See wireframe for details of this component
*/
import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import css from "../Upload/Upload.module.css";
import { children } from "../../libs/children";


const { REACT_APP_BUCKETNAME, REACT_APP_REGION, REACT_APP_ACCESS_KEY_ID, REACT_APP_SECRET_ACCESS_KEY } = process.env;

const config = {
    bucketName: REACT_APP_BUCKETNAME,
    dirName: 'placeholder',
    region: REACT_APP_REGION,
    accessKeyId: REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
};



const Upload = ({ upload }) => {

    const [selectedFile, setSelectedFile] = useState();

    // Controlled components
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [dateDue, setDateDue] = useState('');

    // const updateText = (event) => {
    //     setTitle(event.target.value);
    //     console.log(title);
    // };

    // const updateComment = (event) => {
    //     setText(event.target.value);
    //     console.log(text);
    // };

    // const updateDateDue = (event) => {
    //     setText(event.target.value);
    //     console.log(text);
    // };



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
                console.log(`https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`);

                // setUrl(`https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`);

                console.log(title);

                console.log(comment);
                console.log(dateDue);

                upload({
                    name: title, image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`
                    , dateSet: Date.now(), dateDue: dateDue, comment: comment, children: [...children]
                });

            })
            .catch(
                (err) => { alert(err) }
            )

        // uploadFile(selectedFile, config).catch((err) => { alert(err) })

        //setIsSelected(false);
        // setSelectedFile();

        // close popup


        // upload({
        //     name: title, image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`
        //     , dateSet: Date.now(), dateDue: dateDue, comment: comment, children: [...children]
        // });

        // upload({
        //     name: title, image: `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${config.dirName}/${selectedFile.name}`
        //     , dateSet: 'yesterday', dateDue: dateDue, comment: comment, children: [...children]
        // });

        // upload(
        //     {
        //         name: 'Added homework',
        //         image: url,
        //         dateSet: 'yesterday',
        //         dateDue: 'tommorow',
        //         comment: '',
        //         children:
        //             [...children]
        //     }
        // );


    }



    return (

        <>
            {/* For CSS test purpose only: */}
            <h2 className={css.Test}>Upload</h2>
            Enter title
            <br />
            <input value={title} onChange={(event) =>
                setTitle(event.target.value)}></input>
            <br />
            Comment:
            <br />
            <input value={comment} onChange={(event) =>
                setComment(event.target.value)}></input>
            <br />
            Due date:
            <br />
            <input value={dateDue} onChange={(event) =>
                setDateDue(event.target.value)}></input>
            <br />
            <input type="file" name="file" onChange={browseClick} title="" />
            <br />
            <button onClick={uploadClick}>Submit</button>
        </>
    );
}

export default Upload;
