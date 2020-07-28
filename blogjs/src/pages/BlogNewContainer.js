import React from 'react'
import FatalError from './500'
import BlogNew from './BlogNew'

class BlogNewContainer extends React.Component{
        
    state = {
        form: {
            title:"",
            autor:"",
            content:"",
        },
        loading: false,
        error: null
    }
    ///LA 'e' ES DE 'EVENTO'
    handleChange = e => {    ///CONTROLADOR PARA CADA CAMPO DE DATO
        ///console.log(`${e.target.name}: ${e.target.value}`)
        this.setState({
            form: {
                ///ACTUALIZAR EL VALOR SI ES QUE SE CAMBIA
                ...this.state.form,
                ///CON EL OBJETIVO DE NO SOBREESCRIBIR LA INFORMACION                     
                [e.target.name]: e.target.value  
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        ///EVITAR QUE LA PÁGINA RECARGUE AL APRETAR 'submit'
        e.preventDefault() 
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://127.0.0.1:5002/new', config)
            let json = await res.json()

            this.setState({
                loading: false
            })
             
            this.props.history.push('/home')

        } catch (error){
            this.setState({
                loading: true,
                error
            })
        }
        console.log(this.state)
    }


    render(){
        if(this.state.error)
            return <FatalError/>
        return <BlogNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />
    }
}

export default BlogNewContainer