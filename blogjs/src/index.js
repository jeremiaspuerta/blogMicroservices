// const element = document.createElement('h1')

// element.innerText = 'Hello react'

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'jeremias',
    lastName: 'puerta',
    avatar: 'https://www.w3schools.com/w3css/img_snowtops.jpg'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>hola {getName(user)}</h1>
    }
    return <h1>hola extraño</h1>
}

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element,container)