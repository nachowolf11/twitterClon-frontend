import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import twitterApi from "../api/twitterApi";

export const useFetchUser = () => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const { username } = useParams();

    useEffect(() => {
        setLoading(true)
        twitterApi(`/user/${username}`)
        .then( data => {
            setUser(data.data.userData)
            setLoading(false)
        })
    
    }, [username])
    

    return{
        user,
        loading,
        setUser,
    }
}