type User = {
    name: string,
    email: string,
}

type Props = {
    user: User,
    onUserUpdate: (user: User) => void
}

const Example2 = ({onUserUpdate}: Props) => {
return null
}

export default Example2