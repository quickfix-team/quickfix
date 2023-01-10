import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressSchema } from './addressSchema';
import { ProfileContext } from '../../../contexts/Profile';
import { useContext } from 'react';

interface iData {
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
}

export const FormAddress = () => {

    const { sendPostAndress } = useContext(ProfileContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iData>({
        resolver: yupResolver(addressSchema),
    });

    const onSubmitFunction = async (data: iData) => {
        const resp = await sendPostAndress(data);

        console.log(resp);
    };

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
                helperText={errors.street?.message}
                error={!!errors.street}
            />
            <TextField
                type='text'
                label='Bairro:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('district')}
                helperText={errors.district?.message}
                error={!!errors.district}
            />
            <TextField
                type='text'
                label='Numero:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('number')}
                helperText={errors.number?.message}
                error={!!errors.number}
            />
            <TextField
                type='text'
                label='Cidade:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('city')}
                helperText={errors.city?.message}
                error={!!errors.city}
            />
            <TextField
                type='text'
                label='Estado:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('state')}
                helperText={errors.state?.message}
                error={!!errors.state}
            />
            <ButtonPrimaryStyles>Inserir Endereço</ButtonPrimaryStyles>
        </form>
    );
};
