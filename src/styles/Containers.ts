import styled from 'styled-components';

const ContainerPattern = styled.div`
    width: 100%;
    padding: 0.6rem;
    margin: auto;
    background-color: var(--color-primary);
`;

export const ContainerBudgetStyles = styled(ContainerPattern)`
    max-width: 18.75rem;
`;

export const ContainerRegisterStyles = styled(ContainerPattern)`
    max-width: 22.5rem;
`;

export const ContainerLoginStyles = styled(ContainerPattern)`
    max-width: 22.5rem;
`;

export const ContainerContactStyles = styled(ContainerPattern)`
    max-width: 22.5rem;
`;

export const ContainerAddressStyles = styled(ContainerContactStyles)``;
