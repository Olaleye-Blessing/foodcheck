import { FC } from "react";
import { StyledModalHeader } from "./StyledModal";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "./Index";

type IHeader = Pick<Modal, "title" | "closeModal">;

const ModalHeader: FC<IHeader> = ({ title, closeModal }) => {
    return (
        <StyledModalHeader>
            <h4>{title}</h4>
            <button aria-label="close modal" onClick={closeModal}>
                <AiOutlineClose />
            </button>
        </StyledModalHeader>
    );
};

export default ModalHeader;
