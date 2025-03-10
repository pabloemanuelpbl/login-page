import { ReactNode } from "react";

export default function CardLoginNavigation(props: {children: ReactNode}) {
  return (
    <div className="flex justify-between">
        {props.children}
    </div>
  )
}
