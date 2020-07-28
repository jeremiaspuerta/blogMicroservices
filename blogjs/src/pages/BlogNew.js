import React from 'react'
import BlogForm from '../components/BlogForm'
import Card from '../components/Card'

const BlogNew = ({form, onChange, onSubmit}) => (
    <div className="row">
        <div className="col-sm">
            <Card {...form}/>
        </div>
        <div className="col-sm">
            <BlogForm
                onChange = {onChange}
                onSubmit = {onSubmit}
                form = {form}
            />  
        </div>
    </div>
)

export default BlogNew