import styled from 'styled-components';

const DefaultButton = styled.button`
    background-color: var(--color-secondary);
`;

const EnableDisableButton = styled.button`
    width: 12.0625rem;
    height: 3.625rem;
`;

export const ButtonPrimaryStyles = styled(DefaultButton)`
    width: 13.4375rem;
    height: 2.8125rem;
`;

export const ButtonSecondaryStyles = styled(DefaultButton)`
    width: 18.375rem;
    height: 3.625rem;
`;

export const ButtonDisabledStyles = styled(EnableDisableButton)`
   background-color:var(--color-negative);
`;

export const ButtonActivatedStyles =  styled(EnableDisableButton)`
    background-color:var(--color-sucess);
`;