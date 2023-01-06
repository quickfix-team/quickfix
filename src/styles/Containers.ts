import styled from 'styled-components';

export const ContainerPattern = styled.div`
    width: 100%;
    padding: 0.6rem;
    margin: auto;
    background-color: var(--color-primary);
    max-width: 22.5rem;
`;

export const ContainerBudgetStyles = styled(ContainerPattern)`
    max-width: 18.75rem;
`;

export const ContainerGlobalStyles = styled(ContainerPattern)`
    max-width: 75rem;
`;

