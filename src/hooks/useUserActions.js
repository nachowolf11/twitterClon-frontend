import { useState } from "react"
import twitterApi from "../api/twitterApi"

export const useUserActions = (setUser, user, activeUser) => {

    const [isFollowing, setIsFollowing] = useState(user.followers.find( id => id === activeUser._id ))

    const follow = async(activeUserID) => {
        try {
            const response = await twitterApi.put('/user/follow',{id:activeUserID})
            if(response.data.msg === 'Followed'){
                const followers = user.followers;
                followers.push(activeUserID)
                setUser({...user, followers:followers})
                setIsFollowing(true)
            }else if(response.data.msg === 'Unfollowed'){
                setUser({...user, followers: user.followers.filter(id => id !== activeUserID)})
                setIsFollowing(undefined)
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return{
        follow,
        isFollowing,
    }
}