import React from 'react'

class BlogForm extends React.Component{

    handleSubmit = e => {
        e.preventDefault()    ///EVITAR QUE LA PÁGINA RECARGUE AL APRETAR 'submit'
        console.log(this.state)
    }

    render(){
        const { onChange, form } = this.props
        return(
            <div className="container">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={onChange}
                        value={form.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }
}

export default BlogForm