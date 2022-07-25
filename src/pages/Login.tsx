import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Login = () => {
  const {authenticated, setAuthenticated} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = () => {
    setAuthenticated(true)
    navigate('/')
  }

  return (
    <div>
      <button onClick={() => handleLogin()}>Authenticate</button>
    </div>
  )
}

export default Login