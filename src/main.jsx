import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Hello from './componets/Hello.jsx'
import Result from './componets/Result.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  
    <Result/>

  </React.StrictMode>,
)
