import React from 'react'
import BlogForm from '../components/BlogForm'
import Card from '../components/Card'

class HomeNew extends React.Component{
        
    state = {
        form: {
            title:"",
            description:"",
        }
    }
    ///LA 'e' ES DE 'EVENTO'
    handleChange = e => {    ///CONTROLADOR PARA CADA CAMPO DE DATO
        ///console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            form: {
                ...this.state.form,   ///ACTUALIZAR EL VALOR SI ES QUE SE CAMBIA                        
                [e.target.name]: e.target.value  ///CON EL OBJETIVO DE NO SOBREESCRIBIR LA INFORMACION
            }
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <BlogForm
                        onChange = {this.handleChange}
                        form = {this.state.form}
                    />  
                </div>
            </div>
        )
    }
}

export default HomeNew