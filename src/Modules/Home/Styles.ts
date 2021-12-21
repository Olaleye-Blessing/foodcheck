import styled from "styled-components";
import { StyledSection } from "../../pages/Home/StyledHome";

export const StyledHeader = styled.header`
    margin-top: 3rem;
    margin-bottom: 8rem;
    padding-top: 8rem;
    padding-bottom: 5rem;

    h1,
    p {
        margin-bottom: 1.5rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: row wrap;
    }

    button {
        margin-bottom: 1.2rem;

        &:first-child {
            margin-right: 2rem;
        }
    }
`;

export const StyledPopular = styled(StyledSection)`
    background-color: var(--white-1);

    ul {
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        flex: 1;
    }

    li {
        margin-right: 2rem;
        margin-bottom: 2rem;
    }

    figure {
        box-shadow: var(--box-shadow-md);
        background-color: var(--main-bg);
        width: 6rem;
        height: 6rem;
        padding: 0.7rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        border-radius: 50%;
    }
`;

export const StyledWorks = styled(StyledSection)`
    ul {
    }

    li {
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 5rem;
        padding: 2.5rem 0.2rem 4rem;
        box-shadow: var(--box-shadow-md);
        background-color: transparent;
        border-radius: var(--border-rad-sm);

        figure {
            width: 100%;
            max-width: 20rem;
            height: 18rem;
            margin-left: auto;
            margin-right: auto;
        }

        p {
            opacity: 0.6;
        }
    }
`;
