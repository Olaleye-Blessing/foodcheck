import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    background-color: #0006;
    color: white;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        width: 90%;
        max-width: 43rem;
        background-color: black;
        border-radius: var(--border-rad-sm);
        box-shadow: var(--box-shadow-md);
        overflow: hidden;
    }

    .modal {
        &__body {
            max-height: 70vh;
            overflow: auto;

            & > * {
                padding-left: 1.3rem;
                padding-right: 1.3rem;
            }
        }
    }
`;

export const StyledModalHeader = styled.header`
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.3rem;
    padding-left: 1.3rem;

    button {
        display: block;
        color: red;
        font-size: 3rem;
    }
`;
