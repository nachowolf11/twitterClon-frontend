import { useContext, useState } from "react";
import { TweetContext } from "../context/TweetContext";
import { useAuthStore } from "./useAuthStore";
import { usePostTweet } from "./";
import { useTweetStore } from "./useTweetStore";

export const useTweetForm = () => {
  
    const { tweets, setTweets } = useContext(TweetContext);
    const { user } = useAuthStore();
    const { textToTweet, changeTextToTweet } = useTweetStore();
  
    const handleChange = (e) => {
      changeTextToTweet(e.target.value)
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const tweetPosted = await usePostTweet(textToTweet);
      setTweets([ tweetPosted.data.tweet, ...tweets ]);
      changeTextToTweet('');
    }

    return{
        handleChange,
        handleSubmit,
        textToTweet,
        ...user,
    }
}