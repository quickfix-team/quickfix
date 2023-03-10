import { Link as LinkButton } from 'react-router-dom';
import styled from 'styled-components';

const DefaultButton = styled.button`
    background-color: var(--color-secondary);
`;

export const EnableDisableButton = styled.button`
    padding: 0rem 3.375rem;
    height: 3.625rem;
    background-color: ${props=>props.color};
    font-weight: 600;
    font-size: var(--font-size-3);
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
    background-color: var(--color-negative);
`;

export const ButtonActivatedStyles = styled(EnableDisableButton)`
    background-color: var(--color-sucess);
`;

export const Link = styled(LinkButton)`
    color: var(--color-tertiary);
`;

export const MenuButon = styled.button`
    background: none;

    > svg {
        height: auto;
        width: 34px;
        color: var(--color-secondary);
    }
`;
