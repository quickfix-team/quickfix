import styled from 'styled-components';

export const ContainerPattern = styled.div`
    width: 100%;
    max-width: 22.5rem;
    padding: 0.6rem;
    margin: auto;
    background-color: var(--color-primary);
    border-radius: var(--radius);
`;

export const ContainerBudgetStyles = styled(ContainerPattern)`
    max-width: 18.75rem;
`;

export const ContainerGlobalStyles = styled(ContainerPattern)`
    max-width: 75rem;
    background-color: var(--color-tertiary);
`;
