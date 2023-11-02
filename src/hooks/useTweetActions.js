import { useContext, useState } from "react"
import twitterApi from "../api/twitterApi"
import { TweetContext } from "../context/TweetContext";
import { toast } from 'react-toastify';

// tweetID, userID, like y retweets son informacion del tweet.
// activeUser es información del usuario logueado.
export const useTweetActions = (tweetID, userID, likes, retweets, activeUser) => {

    const { tweets, setTweets } = useContext(TweetContext);

    const [isLiked, setIsLiked] = useState(likes.find(id => id === activeUser._id))
    const [isRetweeted, setIsRetweeted] = useState(retweets.find(user => user._id === activeUser._id))

    const addLike = async() => {
        try {
            await twitterApi.put('/tweet/like',{tweetID})
            setTweets(tweets.map(tweet => {
                if(tweet._id === tweetID){
                    if(!tweet.likes.find(id => id == activeUser._id)){
                        setIsLiked(true)
                        return { ...tweet, likes:[...tweet.likes, activeUser._id]}
                    }else{
                        setIsLiked(undefined)
                        return{ ...tweet, likes:tweet.likes.filter(id => id !== activeUser._id) }
                    }
                }else{
                    return tweet
                }
            }))
        } catch (error) {
            console.log('Error adding like');
        }
    }

    const addRetweet = async() => {
        try {
            await twitterApi.put('/tweet/retweet',{tweetID})
            setTweets(tweets.map(tweet => {
                if(tweet._id === tweetID){
                    if(!tweet.retweets.find(user => user._id == activeUser._id)){
                        setIsRetweeted(true)
                        return { ...tweet, retweets:[...tweet.retweets, activeUser]}
                    }else{
                        setIsRetweeted(undefined)
                        return{ ...tweet, retweets:tweet.retweets.filter(user => user._id !== activeUser._id) }
                    }
                }else{
                    return tweet
                }
            }))
        } catch (error) {
            console.log('Error adding retweet');
        }
    }

    const deleteTweet = async(tweetID) => {
        try {
            await twitterApi.delete(`/tweet/${tweetID}`);
            setTweets(tweets.filter( tweet => tweet._id !== tweetID ));
            toast('Tweet deleted', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                style:{
                    backgroundColor:'#1d9bf0',
                    color:'white',
                    textAlign:'center',
                    width:'200px'
                }
                });
        } catch (error) {
            console.log('Error deleting tweet.');
        }
    }
    return{
        addLike,
        addRetweet,
        deleteTweet,
        isLiked,
        isRetweeted,
    }
}