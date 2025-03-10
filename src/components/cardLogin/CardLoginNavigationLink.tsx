import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardLoginNavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode,
  href: string
}

export default function CardLoginNavigationLink({children, href, ...rest}: CardLoginNavigationLinkProps) {
  return (
    <Link to={href} {...rest} className='font-semibold text-sm text-zinc-600 hover:underline'>
        {children}
    </Link>
  )
}
