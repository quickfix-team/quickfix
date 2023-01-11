import styled from 'styled-components';

const StandardOrganization = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
`;

export const ProfileStyles = styled(StandardOrganization)`
    > section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            > div {
                > img {
                    width: 100%;
                    max-width: 8.4375rem;
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
                    font-size: var(--font-size-2);
                    border-radius: 0.8rem;
                    padding: 1rem 1.5rem 1rem 1.5rem;
                    color: var(--color-tertiary);
                    font-weight: var(--font-weight-1);
                }
            }
        }

        > form {
            width: 100%;
            max-width: 22rem;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            gap: 1rem;
            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin: auto;
                gap: 1rem;
                border-radius: 0.8rem;
                padding: 0.6rem 1.5rem 0.6rem 1.5rem;
                > p {
                    font-size: var(--font-size-3);
                    color: var(--color-tertiary);
                }

            }
        }
    }

    > section ~ section {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        > div {
            width: 100%;
            max-width: 46rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2rem;
            > div {
                overflow-x: auto;
                width: 100%;
                min-width: 10rem;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: row;
                gap: 1rem;

                > div {
                    margin: 0;
                    min-width: 22.5rem;
                    padding: 2rem 1.5rem 2rem 1.5rem;

                    > form {
                        width: 100%;
                        > h2 {
                            font-size: var(--font-size-1);
                            color: var(--color-tertiary);
                        }
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        gap: 2rem;
                        > p{
                            font-size: var(--font-size-3);
                            color: var(--color-tertiary);
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        > section ~ section{
            align-items: center;
            justify-content: center;
        }
    }

    @media (min-width: 1000px) {
        > section ~ section{
            > div{
                > div{
                    justify-content: space-between;
                    width: 50rem;
                }
            }
        }
    }
`;
