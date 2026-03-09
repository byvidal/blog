import {z} from 'zod'

export const registerSchema=z.object({
    username: z.string({
        required_error:'Usuario requerido'
    }).min(1,{
        message:'El usuario debe tener minimo un caracter'
    }),
    email:z.string({
        message:'Email requerido'
    }).email({
        message:'Email no valido'
    }),
    password:z.string({
        required_error:'Contrase requerida'
    }).min(6,{
        message:'La contraseña debe tener minimo 6 caracteres'
    }),
});