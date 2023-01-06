import styled from 'styled-components';

const DefaultButton = styled.button`
    background-color: var(--color-secondary);
`;

const EnableDisableButton = styled.button`
    padding: 0rem 3.375rem;
    height: 3.625rem;
`;

export const ButtonPrimaryStyles = styled(DefaultButton)`
    padding: 0rem 4.375rem;
    height: 2.8125rem;
`;

export const ButtonSecondaryStyles = styled(DefaultButton)`
    padding: 0rem 6.375rem;
    height: 3.625rem;
`;

export const ButtonDisabledStyles = styled(EnableDisableButton)`
   background-color:var(--color-negative);
`;

export const ButtonActivatedStyles =  styled(EnableDisableButton)`
    background-color:var(--color-sucess);
`;