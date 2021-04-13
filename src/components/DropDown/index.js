import css from "./DropDown.module.css";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import Upload from "../Upload";
import { BsFillBellFill, BsCaretDownFill } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import DropdownNotif from "./DropNotif";
import DropdownMsg from "./DropMsg";
import NavItem from "./NavItem";
import NavBar from "./NavBar";
import NavLoad from "./NavLoad";
import DropdownMenu from "./DropdownMenu";

function DropDown() {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      style={{ overlay: { zIndex: 1000 } }}
      className={css.modalBox}
      isOpen
      shouldCloseOnOverlayClick={true}
      onRequestClose={hideModal}
    >
      <p>
        <Upload hideModal={hideModal} />
      </p>
      <button className={css.cornerBtn} onClick={hideModal}>
        X
      </button>
    </ReactModal>
  ));

  return (
    <NavBar>
      <NavLoad icon={<FaPlus />} popupClick={showModal} />
      <NavItem icon={<BsFillBellFill />}>
        <DropdownNotif />
      </NavItem>
      <NavItem icon={<SiMessenger />}>
        <DropdownMsg />
      </NavItem>
      <NavItem icon={<BsCaretDownFill />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavBar>
  );
}

export default DropDown;
