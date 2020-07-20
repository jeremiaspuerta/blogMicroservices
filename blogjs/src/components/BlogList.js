import React from 'react'
import Card from './Card'

const BlogList = ({blog}) => (
    <div>
        { blog.map((home) =>{
            return(
                <Card
                key={home.id}
                title={home.title}
                date={home.date}
                description={home.description}
                leftColor={home.leftColor}
                rightColor={home.rightColor}
            />
            )
        })
        }  
    </div>

)


export default BlogList