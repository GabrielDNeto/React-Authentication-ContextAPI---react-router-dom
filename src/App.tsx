import React from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Routes from "./Routes"

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App