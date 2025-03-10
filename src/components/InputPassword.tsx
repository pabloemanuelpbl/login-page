
import { LockKeyhole, Eye, EyeOff } from 'lucide-react';
import React, { forwardRef, useState } from 'react';

interface InputPasswordProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children: string,
  disableEye?: boolean,
}

const InputPassword: React.ForwardRefExoticComponent<Omit<InputPasswordProps, "ref"> & React.RefAttributes<HTMLInputElement>> = forwardRef(function ({ children, disableEye = false, ...rest }, ref) {
  const [eyeState, setEyeState] = useState(true);

  function appendEye() {
    if (!disableEye) {
      return (
        eyeState ? <EyeOff className='bg-white h-9 w-8 p-2 border-y border-r border-zinc-300 text-zinc-500' />
          :
        <Eye className='bg-white h-9 w-8 p-2 border-y border-r border-zinc-300 text-zinc-500' />
      );
    }

    return <div className='bg-white h-9 w-8 p-2 border-y border-r border-zinc-300'></div>;
  }

  return (
    <div className="flex flex-row items-center">
      <div className="w-9 h-9 flex items-center justify-center bg-zinc-500  text-zinc-50"><LockKeyhole /></div>
      <input
        type={eyeState ? "password" : "text"}
        placeholder={children}
        className="w-52 h-9 py-1 px-2 border-y border-l border-zinc-300 text-zinc-500 font-light outline-none"
        {...rest}
        ref={ref}
        required 
      />

      <div onClick={() => setEyeState(!eyeState)} className='cursor-pointer'>
        {appendEye()}
      </div>
    </div>
  );
})

export default InputPassword;