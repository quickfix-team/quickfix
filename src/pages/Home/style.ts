import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15rem;
        gap: 1rem;
        margin: 1.25rem 0;
    }

    > main > h1 {
        color: var(--color-primary);
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-2);
        width: 9.375rem;
        line-height: var(--line-height);
        text-align: center;
    }

    > main > img {
        width: 9.375rem;

        @media (min-width: 768px) {
            width: 15rem;
        }
    }

    > main > p {
        color: var(--color-primary);
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-1);
        line-height: var(--line-height);
        text-align: center;
    }

    > main > a > div {
        display: flex;
        border-radius: 40px;
    }

    > main > a > div > span {
        color: var(--color-tertiary);
        font-size: var(--font-size-3);
        line-height: var(--line-height);
        text-align: center;
    }

    > main > a > div > img {
        transform: rotate(270deg);
        width: 1.25rem;
        object-fit: contain;
    }
`;
