import { ButtonHTMLAttributes } from "react";

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default function ButtonLogin({children, ...rest}: ButtonLoginProps) {
  return (
    <button 
        className='border border-zinc-500 rounded-xl py-1 text-zinc-600 font-semibold bg-white cursor-pointer hover:bg-zinc-400 hover:text-zinc-50'
        type="submit"
        {...rest}
    >{children}</button>
  )
}
