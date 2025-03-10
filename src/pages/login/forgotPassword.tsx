import React, { useRef } from "react";
import { InputPassword, ButtonLogin } from "../../components";
import inputValidation from "./utils/validateNewPasswordInputs";
import cardLogin from "../../components/cardLogin";

export default function ForgotPassword() {

  const firstInputRef = useRef<HTMLInputElement>();
  const secondInputRef = useRef<HTMLInputElement>();

  const checkInputsAndSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    const validationResult = inputValidation(firstInputRef.current?.value, secondInputRef.current?.value); //depois irei corrigir 
    if (!validationResult.isValid) {
      event.preventDefault();
      alert(validationResult.msg);
    }
  }

  return (
    <cardLogin.Main method='GET' action='/'>
      <cardLogin.Title>Reset your password</cardLogin.Title>
      <InputPassword ref={firstInputRef} disableEye>New password</InputPassword>
      <InputPassword ref={secondInputRef} name="password" disableEye>Comfirm password</InputPassword>
      <ButtonLogin onClick={checkInputsAndSubmit}>SUBMIT</ButtonLogin>
      <cardLogin.Navigation>
        <cardLogin.Link href='/'>Return to login</cardLogin.Link>
        <cardLogin.Link href='/sign_up'>Sign up</cardLogin.Link>
      </cardLogin.Navigation>
    </cardLogin.Main>
  )
}
