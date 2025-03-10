import { ButtonLogin, InputEmail, InputPassword } from '../../components';
import cardLogin from '../../components/cardLogin';

function Login(){
    return (
        <cardLogin.Main method='GET' action='/'>
            <cardLogin.Title>Login</cardLogin.Title>
            <InputEmail name='email'>E-mail</InputEmail>
            <InputPassword name='password'>Password</InputPassword>
            <ButtonLogin>LOGIN</ButtonLogin>
            <cardLogin.Navigation>
                <cardLogin.Link href='/send_email'>Forgot password?</cardLogin.Link>
                <cardLogin.Link href='/sign_up'>Sign up</cardLogin.Link>
            </cardLogin.Navigation>
        </cardLogin.Main>
    )
}

export default Login;