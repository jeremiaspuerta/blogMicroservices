import React from 'react'

class BlogForm extends React.Component{

    render(){
        const { onChange, form, onSubmit } = this.props
        return(
            <div className="container">
            <form 
                onSubmit={onSubmit}
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
                        placeholder="autor" 
                        name="autor"
                        onChange={onChange}
                        value={form.autor}
                    />
                </div>  
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="content" 
                        name="content"
                        onChange={onChange}
                        value={form.content}
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