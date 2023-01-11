import * as yup from 'yup';

export const addressSchema = yup.object().shape({
    street: yup
        .string()
        .required('Rua obrigatório')
        .min(3, 'A rua precisa ter no mínimo 3 caracteres')
        .max(60, 'A rua pode ter no máximo 60 caracteres'),
    district: yup
        .string()
        .required('Bairro obrigatório')
        .min(3, 'O Bairro precisa ter no mínimo 3 caracteres')
        .max(60, 'O Bairro pode ter no máximo 60 caracteres'),
    number: yup
        .string()
        .required('Número obrigatório')
        .min(1, 'O número precisa ter no mínimo 1 caracter')
        .max(6, 'O número pode ter no máximo 6 caracteres'),

    city: yup
        .string()
        .required('Cidade obrigatório')
        .min(3, 'A cidade precisa ter no mínimo 3 caracteres')
        .max(26, 'A cidade pode ter no máximo 26 caracteres'),
    state: yup
        .string()
        .required('Estado obrigatório')
        .min(2, 'O estado precisa ter no mínimo 2 caracteres')
        .max(2, 'O estado pode ter no máximo 2 caracteres'),
});
