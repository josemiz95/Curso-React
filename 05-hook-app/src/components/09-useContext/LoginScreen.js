import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleLogIn = () => setUser({ id: 123, name:"Josemi" });
    const handleLogOut = () => setUser(null);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            {
                user === null?
                <button className='btn btn-primary' onClick={handleLogIn}>Login</button>
                :
                <button className='btn btn-warning' onClick={handleLogOut}>LogOut</button>
            }
        </div>
    )
}
