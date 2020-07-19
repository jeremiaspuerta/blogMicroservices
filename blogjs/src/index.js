// const element = document.createElement('h1')

// element.innerText = 'Hello react'

// const container = document.getElementById('root')

// container.appendChild(element)
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

const container = document.getElementById('root')

ReactDOM.render(<Card
                    title="Titulo PROPS"
                    date="TIEMPO, FECHA Y AUTOR PROPS"
                    description="Descripcion PROPS"
                    leftColor="#F8F2E6"
                    rightColor="#EDFAF5"
                />,container)  ///LOS COMPONENTES SIEMPRE VAN CON SUS ETIQUETAS '<' Y '/>'