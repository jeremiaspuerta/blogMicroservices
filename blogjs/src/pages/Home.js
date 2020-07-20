import React from 'react'
import BlogList from '../components/BlogList'
import Welcome from '../components/Welcome'
import New from '../components/New'

class Home extends React.Component{
    state = {
        data: [{
            "title": "Titulo 1",
            "date":"TIEMPO, FECHA Y AUTOR PROPS",
            "description":"Descripcion PROPS",
            "leftColor":"#F8F2E6",
            "rightColor":"#EDFAF5"
        },{
            "title": "Titulo 2",
            "date":"Tiempo 2",
            "description":"Descripcion 2",
            "leftColor":"#F8F2E6",
            "rightColor":"#EDFAF5"  
        },{
            "title": "Titulo 3",
            "date":"Tiempo 3",
            "description":"Descripcion 3",
            "leftColor":"#F8F2E6",
            "rightColor":"#EDFAF5"
        }]
        }
    render(){
        return (
        <div>
            <Welcome
            username="Jeremias"
            /> 
            <New/> 
            <BlogList
            blog = {this.state.data}
            /> 
        </div>)
}
}

export default Home