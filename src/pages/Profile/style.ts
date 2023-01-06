import styled from 'styled-components';

const StandardOrganization = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProfileStyles = styled(StandardOrganization)`

    .container-main-header,
    .container-informations,
    .container-information-profile,
    .form-img-submission {
        display: flex;
    }

    .container-main-header,
    .container-informations {
        align-items: center;
    }

    .container-main-header,
    .container-informations {
        justify-content: center;
    }

    .container-main-header,
    .container-information-profile,
    .form-img-submission {
        flex-direction: column;
    }

    .container-main-header,
    .container-informations,
    .container-information-profile {
        gap: 1rem;
    }

    .container-information-profile,
    .form-img-submission {
        justify-content: flex-start;
        align-items: flex-start;
    }

    .container-img-profile > img,
    .container-information-profile > p {
        background-color: var(--color-primary);
        border-radius: var(--radius);
    }

    .img-profile {
        width: 100px;
        height: 100px;
    }

    .text-information {
        font-size: var(--font-size-2);
        padding: 0.3rem 0.5rem;
        color: var(--color-tertiary);
        font-weight: var(--font-weight-1);
    }

    .form-img-submission {
        width: 100%;
        gap: 10px;
    }
`;
