import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { ContainerPattern } from '../../../styles/Containers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { imgProfileSchema } from './imgProfileSchema';

export const FormImgProfile = () => {

    interface iData{
        src: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iData>({
        resolver: yupResolver(imgProfileSchema),
    });

    const onSubmitFunction = (data: any) => console.log(data);

    return (
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
            <ContainerPattern>
                <TextField
                    type='text'
                    label='WhatsApp:'
                    variant='standard'
                    size='small'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    {...register('src')}
                />
                {errors.src?.message && <p aria-label='error'>{errors.src?.message}</p>}
            </ContainerPattern>
            <ButtonPrimaryStyles>Inserir Imagem</ButtonPrimaryStyles>
        </form>
    );
};
