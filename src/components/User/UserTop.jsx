import { CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { FollowButton } from './FollowButton'
import { useUiStore, useUserActions } from '../../hooks'
import moment from 'moment'

export const UserTop = ({ tweetFilter, setTweetFilter, activeUser, setUser, user }) => {

  const followersQty = user.followers.length
  const followingQty = user.following.length

  const { follow, isFollowing } = useUserActions(setUser, user, activeUser);
  const { openModal, setSignupStep, setModalType } = useUiStore();

  const handleClick = () => {
    setModalType('signup')
    setSignupStep('EditProfile');
    openModal();
  }

  return (
    <Box display="flex" flexDirection="column" sx={{ borderBottom: '1px rgb(238, 238, 238) solid' }}>

      <Box sx={{ backgroundColor:'grey', height:'200px' }}></Box>

      <Box display="flex" flexDirection="column" px="16px" pt="12px" mb="16px">

        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box position="relative" width="25%" minWidth="48px" mb="12px" mt="-15%">
            <Box pb="100%"></Box>
            <Box position="absolute" height="120px" width="120px" top="0px">
              <img style={{ objectFit: '', width:'100%', height:'100%', borderRadius:'99px', border:'white 4px solid' }} src={user.profilePicture} alt="" />
            </Box>
          </Box>
          <Box>
            {
              activeUser._id === user._id
              ?
                <button className='btn'
                  onClick={handleClick}
                  style={{ 
                    width:'110px',
                    height:'34px',
                    fontSize:'15px',
                    marginTop:'0px',
                    background:'white',
                    border:'1px rgb(218, 218, 218) solid',
                    fontWeight:'bold',
                    borderRadius:'99px',
                    }}>
                    Edit profile
                  </button>
                : <FollowButton isFollowing={isFollowing} _id={user._id} follow={follow}/>
            }
          </Box>
        </Box>

        <Box marginBottom="12px">
          <Box>
            <Typography sx={{ fontWeight:'bold', fontSize:'22px' }}>{ user.name }</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize:'15px', lineHeight:'16px', color:'text.light' }}>@{ user.username }</Typography>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center" mb="6px" sx={{ color:'text.light' }}>
          <CalendarMonthOutlined sx={{ mr:'3px', fontSize:'18px' }}/>
          <Typography sx={{ fontSize:'16px', letterSpacing:'-0.5px' }}>Joined {moment(activeUser.creationDate).format('MMMM YYYY')}</Typography>
        </Box>

        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="row" pr={2}>
            <Typography sx={{ fontSize:'15px', fontWeight:'bold', pr:'3px' }}>{followingQty}</Typography>
            <Typography sx={{ fontSize:'15px' }}>Following</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Typography sx={{ fontSize:'15px', fontWeight:'bold', pr:'3px' }}>{followersQty}</Typography>
            <Typography sx={{ fontSize:'15px' }}>Followers</Typography>
          </Box>
        </Box>

      </Box>

      <Box display="flex" flexDirection="row">
        <Box className="btn" display="flex" justifyContent="center" width="100%" height="100%" onClick={ ()=> setTweetFilter( 'user' ) }>
            <Box position="relative">
                <Typography py={2} sx={{
                    fontWeight: tweetFilter === 'user' ? 'bold' : 'none',
                }}>Tweets</Typography>
                <Box sx={{ 
                    backgroundColor:'primary.main', 
                    width:'52px', 
                    height:'4px',
                    position:'absolute',
                    bottom:'0px',
                    display: tweetFilter === 'user' ? 'block' : 'none',
                    }}></Box>
            </Box>
        </Box>
        <Box className="btn" display="flex" justifyContent="center" width="100%" height="100%" onClick={ ()=> setTweetFilter( 'likes' ) }>
            <Box position="relative">
                <Typography py={2} sx={{
                    fontWeight: tweetFilter === 'likes' ? 'bold' : 'none',
                }}>Likes</Typography>
                <Box sx={{ 
                    backgroundColor:'primary.main', 
                    width:'36px', 
                    height:'4px',
                    position:'absolute',
                    bottom:'0px',
                    display: tweetFilter === 'likes' ? 'block' : 'none',
                    }}></Box>
            </Box>
        </Box>
      </Box>

    </Box>
  )
}
