type Props  = {
    name: string,
    email: string,
}

const Example1 = ({name, email}: Props ) => {
    return (<div>
        <p>My name is {name}</p>
        <p>My e-mail: {email }</p>
        {/* <p>I am {age} year old</p> */}
   </div>) 
}

export default Example1