import React from 'react'
import BlogList from '../components/BlogList'
import Welcome from '../components/Welcome'
import New from '../components/New'

const Home = ({data}) => (
    <React.Fragment>
        <Welcome
        username="Jeremias"
        /> 
        <New/> 
        <BlogList
        blog = {data}
        /> 
    </React.Fragment>
)

export default Home