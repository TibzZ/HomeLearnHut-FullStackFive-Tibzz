import React, {useState, useEffect} from "react";

import {withAuthenticator} from "aws-amplify-react";
import {Storage} from "aws-amplify";

function S3Bucket(){
    const [fileURL, setFileURL] = useState('');
    // const [file, setFile] = useState('');
    // const [filename, setFilename] = useState('');

    // function handleChange(event){
    //     setFile(event.target.files[0]);
    //     setFileURL(file);
    //     setFilename(file.name);
    // }

    // function saveFile(){
    //     Storage.put(filename, file)
    //     .then(()=>{
    //         console.log("successfully saved file!");
    //         setFileURL('');
    //         setFile('');
    //         setFilename('');
    //     })
    //     .catch(err=>{
    //         console.log("error uploading file!", err);
    //     })
    // }

    useEffect(() => {
        Storage.get('BLOB.jpeg')
        .then(data => {
            setFileURL(data);
        })
        .catch(err => {
            console.log('error fetching image')
        })
    }, [])

    return (
        <div>
            <header>
                <h1>Welcome to AWS!</h1>
            </header>
            {/* <input type="file" onChange={handleChange}/> */}
            <img src={fileURL} alt="myS3file"/>
            {/* <button onClick={saveFile}>Save File</button> */}
        </div>
    )
}

export default S3Bucket;