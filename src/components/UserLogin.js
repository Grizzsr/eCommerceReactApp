import React from 'react'
import LoginButton from '../components/LoginButton';

class UserLogin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Password'></input>
                </div>
                <LoginButton />
            </div>
        )
    }
}

export default UserLogin