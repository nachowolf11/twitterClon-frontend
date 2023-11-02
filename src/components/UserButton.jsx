import { MoreHoriz } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { useAuthStore, useModal } from '../hooks'

export const UserButton = ({username, name, profilePicture}) => {

  const { startLogout } = useAuthStore();

  const onLogout = () => {
    startLogout();
  }

  const ref = useRef();
  const { onClick, modal } = useModal(ref);
  

  return (
  <Box ref={ref} width="100%" my="12px" position="relative" sx={{ cursor: 'pointer' }}>
    <Box className="header-link" display="flex" flexDirection="row" alignItems="center" p="12px" onClick={ onClick }>

      <Box width="40px" height="40px">
        <img style={{ objectFit: '', width:'100%', height:'100%', borderRadius:'99px' }} src={profilePicture}/>
      </Box>

      <Box className="web" display="flex" flexDirection="column" textAlign="start" flexGrow={1} pl={1}>
        <Typography lineHeight="15px" sx={{ fontWeight:'bold' }}>{name}</Typography>
        <Typography sx={{ color:'text.light' }}>@{username}</Typography>
      </Box>

      <Box className="web">
        <MoreHoriz sx={{ fontSize:'20px' }}/>
      </Box>

    </Box>

    <Box onClick={ onLogout } position="absolute" top="-70px" boxShadow={4} display={ modal } sx={{ backgroundColor: 'white', borderRadius:'10px', padding:'18px'}}>
      <Typography sx={{ fontWeight:'bold' }}>Log out @{username}</Typography>
    </Box>
  </Box>
  )
}
