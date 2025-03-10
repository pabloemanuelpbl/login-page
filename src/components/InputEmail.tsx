import { Mail } from "lucide-react";

interface InputEmailProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string
}

export default function InputEmail({children, ...rest}: InputEmailProps) {
  return (
    <div className="flex flex-row">
        <div className="w-9 h-9 flex items-center justify-center bg-zinc-500 text-zinc-50"><Mail /></div>
        <input 
            type="email" 
            placeholder={children}
            className="h-9 w-60 py-1 px-2 border border-zinc-300 text-zinc-500 font-light outline-none"
            {...rest}
            required
        />
    </div>
  )
}
