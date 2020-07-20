import React from 'react'
import '../styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container"> 
        <div className="User-Info">
            <h1>Hola {username}</h1>
            <p>bienvenido a Blog</p>
        </div>
    </div>
)

 export default Welcome