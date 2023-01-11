import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('Campo obrigatório!')
        .min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
    email: yup.string().required('Campo obrigatório!').email('Email inválido.'),
    password: yup
        .string()
        .required('Campo obrigatório!')
        .matches(/(?=.*?[A-Za-z])/, 'É necessário pelo menos uma letra.')
        .matches(/(?=.*?[0-9])/, 'É necessário pelo menos um número.')
        .matches(/(?=.*?[#?!@$%^&*-])/, 'É necessário pelo menos um caractere.')
        .min(8, 'É necessário pelo menos 8 caracteres.'),
    confirmPwd: yup
        .string()
        .required('Por favor, confirme sua senha.')
        .oneOf([yup.ref('password'), null], 'As senhas não correspondem.'),
    cnpj: yup
        .string()
        .required('Campo obrigatório!')
        .matches(/^[0-9]{14}$/, 'CNPJ Inválido.'),
});
