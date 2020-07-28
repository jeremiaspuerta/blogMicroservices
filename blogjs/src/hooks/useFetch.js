import {useState,useEffect} from 'react'

const useFetch = url => {
    const [ data, setData ] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchResource = async () => {
            try{
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
            } catch (error){
                setLoading(false)
                setError(error)
            }

            ///console.log(data) SIRVE PARA MOSTAR DATOS EN LA CONSOLA DEL NAVEGADOR
        }
        fetchResource()
    }, [url])

    return { data, loading, error}
}

export default useFetch