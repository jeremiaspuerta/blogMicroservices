// const element = document.createElement('h1')

// element.innerText = 'Hello react'

// const container = document.getElementById('root')

// container.appendChild(element)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const container = document.getElementById('root')

///LOS COMPONENTES SIEMPRE VAN CON SUS ETIQUETAS '<' Y '/>'
ReactDOM.render(<App/>,container)  