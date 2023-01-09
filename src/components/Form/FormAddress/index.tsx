import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressSchema } from './addressSchema';

export const FormAddress = () => {

    interface iData{
        street: string;
        district: string;
        number: string;
        city: string;
        state: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iData>({
        resolver: yupResolver(addressSchema),
    });

    const onSubmitFunction = (data: any) => console.log(data);


    return (
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Endereço</h2>
            <TextField
                type='text'
                label='Rua:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('street')}
            />
            {errors.street?.message && <p aria-label='error'>{errors.street?.message}</p>}
            <TextField
                type='text'
                label='Bairro:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('district')}
            />
            {errors.district?.message && <p aria-label='error'>{errors.district?.message}</p>}
            <TextField
                type='text'
                label='Numero:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('number')}
            />
            {errors.number?.message && <p aria-label='error'>{errors.number?.message}</p>}
            <TextField
                type='text'
                label='Cidade:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('city')}
            />
            {errors.city?.message && <p aria-label='error'>{errors.city?.message}</p>}
            <TextField
                type='text'
                label='Estado:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('state')}
            />
            {errors.state?.message && <p aria-label='error'>{errors.state?.message}</p>}
            <ButtonPrimaryStyles>Inserir Endereço</ButtonPrimaryStyles>
        </form>
    );
};
