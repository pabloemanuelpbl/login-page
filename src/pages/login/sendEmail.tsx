import { ButtonLogin, InputEmail } from "../../components"
import cardLogin from "../../components/cardLogin"

export default function SendEmail(){
  return (
    <cardLogin.Main>
        <cardLogin.Title>Enter your email address to reset your password</cardLogin.Title>
        <InputEmail>E-mail</InputEmail>
        <ButtonLogin>SUBMIT</ButtonLogin>
        <cardLogin.Navigation>
            <cardLogin.Link href="/">Return to login</cardLogin.Link>
            <cardLogin.Link href="/sign_up">Sign up</cardLogin.Link>
        </cardLogin.Navigation>
    </cardLogin.Main>
  )
}
