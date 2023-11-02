import { useContext, useEffect, useState } from "react"
import twitterApi from "../api/twitterApi";
import axios from "axios";
import { TweetContext } from "../context/TweetContext";

export const useFetchTweets = ({limit, pageNumber, setPageNumber, tweetFilter, tweetUserFilter, text}) => {

    const { tweets, setTweets } = useContext(TweetContext);

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    
    useEffect(() => {
        setTweets([])
        setPageNumber(1)
    }, [tweetFilter, tweetUserFilter, text])
    
    // El Cancel sirve para que no se manden solicitudes simultaneas. En este caso
    // me sirve para que no se haga un fetch con la pagina 2 y luego con la 1
    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel
        twitterApi.get(
            `/tweet?limit=${limit}&page=${pageNumber}${tweetFilter !== undefined ? `&filter=${tweetFilter}`:''}${tweetUserFilter ? `&user=${tweetUserFilter}`:''}${text !== undefined ? `&text=${text}`:''}`,
        {cancelToken:new axios.CancelToken( c => cancel = c )})
        .then(res => {
            setTweets(prevTweets => {
                return [...new Set([...prevTweets, ...res.data.tweets.docs])]
            })
            setHasMore(res.data.tweets.hasNextPage);
            setLoading(false);
        })
        .catch( e => {
            if(axios.isCancel(e)) return
            setError(true)
        } )
        return () => cancel()
    }, [tweetFilter, pageNumber, text])
    

    return{
        loading,
        hasMore,
        tweets,
        pageNumber
    }
}