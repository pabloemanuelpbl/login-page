import { useRef } from "react";
import { ButtonLogin, InputEmail, InputPassword } from "../../components";
import cardLogin from "../../components/cardLogin";
import inputValidation from "./utils/validateNewPasswordInputs";

export default function SignUp() {

  const firstInputRef = useRef<HTMLInputElement>();
  const secondInputRef = useRef<HTMLInputElement>();

  return (
    <cardLogin.Main>
        <cardLogin.Title>Sign up</cardLogin.Title>
        <InputEmail name="email">E-mail</InputEmail>
        <InputPassword ref={firstInputRef} name="password" disableEye>Password</InputPassword>
        <InputPassword ref={secondInputRef} disableEye>Confirm password</InputPassword>
        <ButtonLogin onClick={event=>{
          const validationResult = inputValidation(firstInputRef.current?.value, secondInputRef.current?.value);
          if (!validationResult.isValid) {
            event.preventDefault();
            alert(validationResult.msg);
          } 
        }}>REGISTER</ButtonLogin>
        <cardLogin.Navigation>
          <cardLogin.Link href="/send_email">Forgot password</cardLogin.Link>
          <cardLogin.Link href="/">Return to login</cardLogin.Link>
        </cardLogin.Navigation>
    </cardLogin.Main>
  )
}
