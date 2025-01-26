interface UserProps{
    firstName: string;
    className?: string
}

const UserComponent: React.FC<UserProps> = (props)=>{
    return <div className={props.className}>Hello {props.firstName}</div>
}
export default UserComponent;
