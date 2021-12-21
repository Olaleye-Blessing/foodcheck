import styled from "styled-components";

export const StyledNav = styled.nav`
    .container {
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        color: var(--main-fg);
        font-weight: 700;

        span {
            color: var(--primary);
        }
    }
`;
