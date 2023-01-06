import styled from 'styled-components';

const StandardOrganization = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProfileStyles = styled(StandardOrganization)`
    > section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            > div {
                > img {
                    width: 8.4375rem;
                    height: 8.4375rem;
                    background-color: var(--color-primary);
                    border-radius: var(--radius);
                }
            }

            > div ~ div {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                gap: 1rem;

                > p {
                    background-color: var(--color-primary);
                    border-radius: var(--radius);
                    font-size: var(--font-size-2);
                    padding: 0.3rem 0.5rem;
                    color: var(--color-tertiary);
                    font-weight: var(--font-weight-1);
                }
            }
        }

        > form {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            gap: 0.625rem;
        }
    }
`;