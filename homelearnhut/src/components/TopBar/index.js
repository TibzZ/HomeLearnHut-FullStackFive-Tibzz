/*
Once logged in (have gone through the landing page or previously logged in) the TopBar is displayed on all pages (states/routes)

It says the name, a logo which can be clicked to take to the news feed ( similar to how Facebook operates)

It also has a button that opens the upload box...

It says who is logged in, (perhaps even an avatar), and has a logout button
*/

import css from "../TopBar/TopBar.module.css";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

function TopBar({ uploadClick }) {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p>Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
    </ReactModal>
  ));
  return (
    <>
      HomeLearn Hut (Logo)<button onClick={showModal}>Upload</button>
      {/* CSS test Topbar only: */}
      {/* <h2 className={css.Test}>Css Test |</h2> */}
    </>
  );
}

export default TopBar;

