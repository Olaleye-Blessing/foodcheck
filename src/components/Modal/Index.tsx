import { FC, useEffect } from "react";
import { ModalHeader } from "./../../components";
import { StyledModal } from "./StyledModal";

export interface Modal {
    closeModal: () => void;
    title: string;
}

const Index: FC<Modal> = ({ children, closeModal, title }) => {
    const closeModalWhenEscapeKeyIsPressed = (e: KeyboardEvent) => {
        if (e.code === "Escape") {
            closeModal();
        }
    };

    useEffect(() => {
        document.body.addEventListener(
            "keydown",
            closeModalWhenEscapeKeyIsPressed
        );

        return () =>
            document.body.removeEventListener(
                "keydown",
                closeModalWhenEscapeKeyIsPressed
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledModal>
            <div>
                <ModalHeader title={title} closeModal={closeModal} />
                <section className="modal__body">{children}</section>
            </div>
        </StyledModal>
    );
};

export default Index;
