import { useCallback, useRef, useState } from "react";
import { useFetchTweets } from "../hooks"
import { Tweet } from "./Tweet";
import { Box } from "@mui/material";
import { LoadingPage } from "../ui";


export const TweetContainer = ({ tweetFilter, tweetUserFilter, text, user }) => {
  
const [pageNumber, setPageNumber] = useState(1)

const { 
  tweets,
  hasMore,
  loading,
  error
  } = useFetchTweets({limit:15, pageNumber, setPageNumber, tweetFilter, tweetUserFilter, text});


const observer = useRef()

const lastTweetRef = useCallback(node => {
  if(loading) return
  if(observer.current) observer.current.disconnect();

  observer.current = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && hasMore){
      setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
  })

  if(node) observer.current.observe(node)
  
},[loading, hasMore])


  return (
    <Box mb={13}>
        {
            tweets.map( (tweet, index) => {
              if(tweets.length === index + 1){
                return <div ref={lastTweetRef} key={tweet._id}><Tweet tweet={tweet} tweetFilter={tweetFilter} user={user}/></div>
              }else{
                return <Tweet key={tweet._id} tweet={tweet} tweetFilter={tweetFilter} user={user}/>
              }
            })
        }
        <div>{loading && <LoadingPage/>}</div>
    </Box>
  )
}
