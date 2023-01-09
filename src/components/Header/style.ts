import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    width: 100%;

    background: var(--color-primary);

    padding: 11px 31px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;

        h1 {
            font-family: 'Odibee Sans', cursive;
            font-size: var(--font-size-2);
            color: #ffffff;
        }
    }
`;
