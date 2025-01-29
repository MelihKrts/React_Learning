import * as React from "react";

interface Props {
    children?:React.ReactNode,
    className?:string,
    onClick:() => void,
}

const Button: React.FC<Props> = (props)=> {
    return(
        <button onClick={props.onClick} className={props.className}>Click me</button>
    )
}

export default Button;