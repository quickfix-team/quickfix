import styled from 'styled-components';

export const DivModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;

    .contentModal {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        position: absolute;
        top: 70px;
        right: 70px;
        background: var(--color-primary);
        padding: 15px 25px;
        border-radius: 30px 0px 30px 30px;

        a {
            color: var(--color-tertiary);
            font-size: var(--font-size-3);

            :hover {
                opacity: 0.7;
            }
        }
    }
`;
