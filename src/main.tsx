import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form'
import App from './App'
        

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h2 style={ { textAlign:'center',color:'white'}}>Bandera Tricolor</h2>
    <App/>
    <br />
    <br />
    
    <h1 style={ { textAlign:'center',color:'white'}}>Formulario de Local Storage</h1>
    <Form />
  </React.StrictMode>
)
