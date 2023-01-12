import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

    > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15rem;
        gap: 1rem;
        margin: 1.25rem 0;

        @media (min-width: 768px) {
            width: 20rem;
            gap: 2rem;
        }
    }

    > main > h1 {
        color: var(--color-primary);
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-2);
        width: 9.375rem;
        line-height: var(--line-height);
        text-align: center;
        text-shadow: 0px 5px 4px rgba(0, 0, 0, 0.6);

        @media (min-width: 768px) {
            width: 100%;
        }
    }

    > main > img {
        width: 9.375rem;

        @media (min-width: 768px) {
            width: 20rem;
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
        padding: 5px;
        text-align: center;
    }

    > main > a > div > img {
        transform: rotate(270deg);
        width: 1.25rem;
        object-fit: contain;
    }
`;
