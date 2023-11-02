import React, { useState } from 'react'
import { TweetContainer, UserTop } from '../'
import { useAuthStore, useFetchUser } from '../../hooks'
import { LoadingPage } from '../../ui'

export const UserMain = () => {

const [tweetFilter, setTweetFilter] = useState('user')
const { user, setUser, loading } = useFetchUser();
const { user:activeUser } = useAuthStore();

  return (
    <>
    {
      loading
      ? <LoadingPage/>
      :
      <>
        <UserTop setUser={setUser} tweetFilter={tweetFilter} setTweetFilter={setTweetFilter} user={user._id === activeUser._id ? activeUser : user} activeUser={activeUser}/>
        <TweetContainer tweetFilter={tweetFilter} tweetUserFilter={user._id} user={user} />
      </>
    }
    </>
  )
}
