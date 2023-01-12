import styled from 'styled-components';

export const FormCard = styled.section`
    width: 90%;
    height: 100vh;
    max-width: 500px;
    margin: auto;
    
    display: grid;
    place-items: center;

    color: var(--color-tertiary);

    & > div {
        background-color: var(--color-primary);
        border-radius: var(--radius);
        padding: 2.5rem;
        width: 100%;

        display: grid;
        place-items: center;

        gap: 1.875rem;

        & > form {
            display: grid;
            place-items: center;
            width: 100%;
            gap: .9375rem;

            & > button {
                width: 100%;
                margin-top: 1.25rem;
            }
        }
    }
`;
