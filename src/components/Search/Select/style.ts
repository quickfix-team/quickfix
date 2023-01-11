import styled from 'styled-components';

export const StyledSelect = styled.div`
    display: flex;
    flex-direction: column;

    > div {
        height: 58px;

        padding: 0 5px;

        border-radius: 10px;

        background: var(--color-primary);

        > svg {
            color: #ffffff;
        }
    }
`;
