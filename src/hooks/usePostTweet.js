import { useContext } from "react";
import twitterApi from "../api/twitterApi"
import { TweetContext } from "../context/TweetContext";

export const usePostTweet = async(text) => {
    try {
        const tweetPosted = await twitterApi.post('/tweet',{text, file:""})
        return tweetPosted
    } catch (error) {
        console.log(error);
        return
    }
}