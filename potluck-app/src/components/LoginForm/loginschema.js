import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup.string().required('username is required').min(3, 'username needs to be at least four characters minimum'),
    password: Yup.string().required('password is invalid').min(2, 'password must be at least two characters long.')
});

export default formSchema