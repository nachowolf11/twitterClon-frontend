import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const ResultItem = ({username, profilePicture, name}) => {
  return (
    <NavLink to={`/user/${username}`}>
        <Box display="flex" width="100%" py="12px" px="16px" sx={{ ':hover':{ bgcolor:'rgb(230, 230, 230)', transition:'.2s' } }}>

            <Box mr="12px">
                <img style={{ objectFit: '', width:'56px', height:'56px', borderRadius:'99px' }} src={profilePicture}/>
            </Box>

            <Box display="flex" flexDirection="column">
                <Typography sx={{ fontWeight:'bold', color:'black' }}>{name}</Typography>
                <Typography sx={{ color:'text.light' }}>@{username}</Typography>
            </Box>

        </Box>

    </NavLink>
  )
}
