import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
