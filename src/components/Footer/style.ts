import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-primary);

    text-align: center;

    @media (max-width: 900px) {
        height: 70px;
    }

    > span {
        color: var(--color-tertiary);
        font-size: var(--font-size-3);
        line-height: var(--line-height);
    }
`;
