import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup.string().required('username is required').min(4, 'username needs to be at least four characters minimum'),
    password: Yup.string().required('password is invalid').min(5, 'password must be at least five characters long.')
});

export default formSchema