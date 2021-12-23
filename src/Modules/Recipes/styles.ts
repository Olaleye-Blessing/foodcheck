import styled from "styled-components";

export const StyledRecipeResult = styled.section`
    ul {
        margin-top: 2rem;
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        gap: 1rem;
        flex-flow: row wrap;
        perspective: 40rem;
    }
`;

export const StyledResultRecipe = styled.li`
    margin: 2rem auto;
    width: 100%;
    max-width: 25rem;
    border-radius: var(--border-rad-sm);
    overflow: hidden;
    box-shadow: var(--box-shadow-md);
    transition: all 0.3s linear;

    &:hover {
        transform: scale(1.02);
        box-shadow: var(--box-shadow-sm);
    }

    div {
        padding: 1rem 1.5rem 3rem;
    }

    button {
        margin-top: 3rem;
    }
`;

interface IStyled {
    bgImage: string;
}

export const StyledIngredients = styled.section<IStyled>`
    background-image: url(${({ bgImage }) => bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-left: 0 !important;
    box-shadow: var(--box-shadow-md);
    padding-right: 0 !important;

    ol {
        padding: 1rem 1.3rem;
        background-color: var(--overlay);
    }

    li {
        margin-bottom: 0.9rem;
    }
`;

export const StyledForm = styled.form`
    position: relative;
    margin-top: 2rem;

    input {
        appearance: none;
        display: block;
        padding: 0.7rem 4.2rem 1rem 1.2rem;
        border-radius: var(--border-rad-sm);
        z-index: 10;
    }

    button {
        position: absolute;
        top: 2rem;
        right: 1rem;
        transform: translateY(-50%);
        font-size: 1.2rem;
        z-index: 9;
    }
`;
