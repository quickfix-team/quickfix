import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    whatsApp: yup
        .string()
        .required('WhatsApp obrigatório'),
    telegram: yup
        .string(),
    instagram: yup
        .string(),
    tel: yup
        .string()
        .required('Número de telefone obrigatório')
        .matches(
            /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm,
            'Não é um formato de telefone válido'
        ),
    email: yup
        .string()
        .required('Email obrigatório')
        .min(64, 'O email precisa ter no mínimo 64 caracteres')
        .max(255, 'O eemail pode ter no máximo 255 caracteres'),
});
