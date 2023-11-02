import { useState } from "react"
import { SearchBar, TweetContainer } from "../"

export const ExploreMain = () => {

  const [text, setText] = useState('')
  
  return (
    <>
    <SearchBar setText={setText}/>
    <TweetContainer tweetFilter={'text'} text={text}/>
    </>

  )
}
