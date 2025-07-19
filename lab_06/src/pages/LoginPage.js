import React, { useEffect, useState } from 'react'
import GoogleLoginButton from '../components/GoogleLoginButton'
import { jwtDecode } from 'jwt-decode'

export default function LoginPage() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedUser = localStorage.getItem("googleUser")
        if(savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    const handleSuccess = (res) => {
        const decoded = jwtDecode(res.credential)
        setUser(decoded)
        localStorage.setItem('googleUser', JSON.stringify(decoded))
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('googleUser')
    }

    return (
        <div>
            <h2>Login Page</h2>
            {!user ? (
                <GoogleLoginButton onLoginSuccess={handleSuccess}></GoogleLoginButton>
            ): (
                <div>
                    <p>Welcome {user.name}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            )}
        </div>
    )
}
