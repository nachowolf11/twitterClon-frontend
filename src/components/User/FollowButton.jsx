
export const FollowButton = ({isFollowing, _id, follow}) => {
  return (
    <button
      className={ `user-btn ${isFollowing ? 'user-btn-following' : 'user-btn-follow'}`}
      onClick={()=>{follow(_id)}}
    >
        <span className="user-span-following">
          {
              isFollowing ? 'Following' : 'Follow'
          }
        </span>
        <span className="user-span-unfollow">Unfollow</span>
    </button>
  )
}
