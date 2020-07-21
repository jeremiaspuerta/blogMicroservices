import React from 'react'
import BlogList from '../components/BlogList'
import Welcome from '../components/Welcome'
import New from '../components/New'

class Home extends React.Component{
    state = {
        data: []
        }
    
    async componentDidMount(){
        await this.fetchBlog()
    }

    fetchBlog = async () => {
        let res = await fetch('url')
        let data = await res.json()
        this.setState({
            data
        })
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