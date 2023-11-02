import React, { createContext, useState } from 'react'

export const TweetContext = createContext();

export const TweetProvider = ({children}) => {

  const [tweets, setTweets] = useState([])


  return (
    <TweetContext.Provider value={{tweets, setTweets}}>
        { children }
    </TweetContext.Provider>
  )
}
