import { useDispatch, useSelector } from "react-redux";
import { onChangeTextToTweet } from "../store";

export const useTweetStore = () => {

    const { textToTweet } = useSelector( state => state.tweet );
    const dispatch = useDispatch();

    const changeTextToTweet = (payload) => {
        dispatch( onChangeTextToTweet(payload) );
    }

    return{
        textToTweet,

        changeTextToTweet,
    }
}