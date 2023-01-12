import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    width: 100%;

    background: var(--color-primary);

    padding: 11px 31px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
        width: 130px;
    }

    @media (max-width: 900px) {
        > img {
            width: 90px;
        }
    }
`;
