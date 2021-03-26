/*
This is opened when the upload button is clicked on the TopBar component

See wireframe for details of this component
*/
import css from "../Upload/Upload.module.css";
const Upload = () => {
    return (

        <>
            {/* For CSS test purpose only: */}
            <h2 className={css.Test}>Css Upload |</h2>
            Enter title
            <br />
            <input></input>
            Comment:
            <br />
            <input></input>
            <br />
            Due date:
            <br />
            <input></input>
            <br />
            <button>Upload</button>
            <br />
            upload status
            <br />
            <button>Submit</button>
        </>
    );
}

export default Upload;