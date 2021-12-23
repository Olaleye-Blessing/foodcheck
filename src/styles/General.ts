import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

const General = createGlobalStyle`
    :root {
        --main-bg: #fff;
        --main-fg: #222;

        --white-1: #d8d8d84a;
        --green-1: #0a8;

        --overlay: #0007;

        --font-body: 'Mulish', sans-serif;
        --font-headings: 'Bitter', serif;

        --border-rad-sm: 0.8rem;

        --shadow: 0 0.1rem 0.1rem hsl(0deg 0% 0% / 0.075);
        --shadow-last: 0 16px 16px hsl(0deg 0% 0% / 0.075);

        --box-shadow-sm: var(--shadow), var(--shadow), var(--shadow-last);
        --box-shadow-md: var(--shadow), var(--shadow), var(--shadow), var(--shadow), var(--shadow-last);
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        line-height: 1.5;
        font-family: var(--font-body);
        background-color: var(--main-bg);
        color: var(--main-fg);
        font-size: 1.8rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 900;
        letter-spacing: 0.1rem;
        line-height: 1;
    }

    h1 {
        font-size: 3.8rem;
    }

    h2 {
        font-size: 2.8rem;
    }

    h3 {
        font-size: 2.1rem;
    }

    h5 {
        font-size: 1.8rem;
    }

    a, button {
        display: inline-block;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .btn {
        border: 0.1rem solid transparent;
        padding: 1rem 1.4rem;
        border-radius: var(--border-rad-sm);
        background: var(--green-1);
        color: var(--main-bg);
        transition: all 0.2s linear;

        &:hover {
            opacity: 0.7;
        }

        &__outline {
            background-color: transparent;
            color: var(--green-1);
            border-color: inherit;
        }

    }

    img, svg {
        max-width: 100%;
    }

    .container {
        padding-left: 2rem;
        padding-right: 2rem;
        max-width: 100rem;
        margin-right: auto;
        margin-left: auto;

        @media screen and (${device.mobileL}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        @media screen and (${device.tablet}) {
            padding-left: 4rem;
            padding-right: 4rem;
        }

        @media screen and (${device.mobileL}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

    }

    input {
        width: 100%;
        appearance: none;
        border: 0.1rem solid;
        font-family: inherit;
        font-size: 100%;
        outline: none;

        &[type="search"]::-webkit-search-cancel-button {
            display: none;
        }
    }
`;

export default General;
