import { useEffect, useState } from "react"
import twitterApi from "../api/twitterApi";

export const useSearch = (query) => {

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setResults([])
    }, [query])
    
    useEffect(() => {
        if(query){
            setLoading(true);
            setError(false);
            twitterApi.get(
                `/user?search=${query}`)
            .then(res => {
                setResults(res.data.results)
                setLoading(false);
            })
            .catch( e => {
                setError(true)
            } )
        }
    }, [query])

    return{
        results, loading, error, setResults
    }
}