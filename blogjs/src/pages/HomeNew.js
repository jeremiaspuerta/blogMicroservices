import React from 'react'
import Home from './Home'

class HomeNew extends React.Component{

    handleClick= () => {
        console.log('Clicked')
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default HomeNew