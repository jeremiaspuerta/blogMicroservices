import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Home from './Home'
import useFetch from '../hooks/useFetch'

const HomeContainer = () => {
    const { data, loading, error} = useFetch('http://127.0.0.1:5002/')
    if(loading)
        return <Loading/>
    if(error)
        return <FatalError/>
    return <Home
            data={data}    
            />
}
export default HomeContainer