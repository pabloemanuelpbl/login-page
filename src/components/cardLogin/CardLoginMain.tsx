import React, { FormHTMLAttributes } from "react";

interface CardLoginMainProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode,
}

export default function CardLoginMain({children, ...rest}: CardLoginMainProps) {
  return (
    <form {...rest} className="px-6 py-4 max-w-80 bg-zinc-50/90 flex flex-col space-y-4 rounded-xl">
        {children}
    </form>
  )
}
