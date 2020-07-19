import React from 'react'
import '../styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component{
    render(){
        const { title, description, leftColor, rightColor, date} = this.props
        return (
            <div className="card mx-auto Blog-Card" style={{
                background: `linear-gradient(to right, ${rightColor}, ${leftColor})`
            }}>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{description}</p>
            </div>
        )
    }
}

export default Card  ///SIEMPRE HAY QUE EXPORTAR