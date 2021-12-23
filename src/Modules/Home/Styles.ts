import styled from "styled-components";
import { StyledSection } from "../../pages/Home/StyledHome";
import { device } from "../../styles/breakpoints";

export const StyledHeader = styled.header`
    margin-top: 3rem;
    margin-bottom: 8rem;
    padding-top: 8rem;
    padding-bottom: 5rem;

    .header {
        &__head,
        &__para {
            margin-bottom: 1.5rem;
            max-width: 40rem;
        }

        &__links {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-flow: row wrap;
        }

        &__bg {
            display: none;
        }
    }

    button {
        margin-bottom: 1.2rem;

        &:first-child {
            margin-right: 2rem;
        }
    }

    @media screen and (${device.mobileL}) {
        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header {
            &__content {
                width: 100%;
                flex: 3;
            }
            &__bg {
                flex: 2;
                display: block;
                max-width: 40rem;
            }
        }
    }

    @media screen and (${device.laptop}) {
        min-height: calc(100vh - 17rem);
        display: flex;
        padding: 0;
    }
`;

export const StyledPopular = styled(StyledSection)`
    background-color: var(--white-1);
    padding-top: 8rem;
    padding-bottom: 8rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        flex: 1;
        max-width: 54rem;
        margin: 4rem auto 0rem;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    li {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0.2rem 4rem;
        box-shadow: var(--box-shadow-md);
        background-color: transparent;
        border-radius: var(--border-rad-sm);
        max-width: 28rem;
        margin: 4rem auto 0rem;

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
