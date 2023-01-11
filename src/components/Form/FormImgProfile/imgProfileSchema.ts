import * as yup from 'yup';

export const imgProfileSchema = yup.object().shape({
    src: yup.string().required('Link para imagem de perfil obrigatório'),
});
