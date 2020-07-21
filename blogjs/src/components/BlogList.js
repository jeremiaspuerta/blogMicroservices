import React from 'react'
import Card from './Card'

///FORMA MAS CORTA DE ESTRUCTUR UN COMPONENTE FUNCIONAL
const BlogList = ({blog}) => (
    <div>
        { blog.map((home) =>{
            return(
                <Card
                key={home.id}
                title={home.title}
                description={home.description}
            />
            )
        })
        }  
    </div>

)


export default BlogList