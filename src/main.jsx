import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='276110998582-0dmpugve9lh1gieciq4r2pdd7361n1ng.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>

)
