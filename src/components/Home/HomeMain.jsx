import React, { useEffect, useState } from 'react'
import { TopHome, TweetContainer, TweetForm } from '../'
import { useAuthStore } from '../../hooks'

export const HomeMain = () => {

const [tweetFilter, setTweetFilter] = useState(undefined)
const { user } = useAuthStore();

useEffect(() => {
  window.scroll(0,0)
}, [tweetFilter])


  return (
    <>
        <TopHome tweetFilter={tweetFilter} setTweetFilter={setTweetFilter}/>
        <TweetForm/>
        <TweetContainer tweetFilter={tweetFilter} tweetUserFilter={user._id}/>
    </>
  )
}
