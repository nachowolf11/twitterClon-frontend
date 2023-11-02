import { AddCircleOutline, BookmarkBorder, CreateOutlined, EmailOutlined, Home, NotificationsOutlined, PersonOutlineOutlined, Tag, Twitter } from "@mui/icons-material"
import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
// import '../../styles/header.css'
import { useAuthStore, useUiStore } from "../hooks"
import { UserButton } from "./"

export const Header = () => {

    const { user } = useAuthStore();
    const { openTweetModal } = useUiStore();

  return (
    <Box
      className="header-links-container"
      position="relative"
      display="flex"
      px="8px"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      height="100%"
    >
      <Box sx={{ display:'flex', flexDirection:'column' }}>

        <Box>
          <NavLink to="/home">
            <button className="header-link">
            <Box display="flex" alignItems="center" p={1.5}>
                <Twitter className="heaeder-icon" color="primary"/>
              </Box>
            </button>
          </NavLink>
        </Box>

        <Box sx={{ display:'flex', flexDirection:'column' }}>
          <NavLink to="/home">
              <button className="header-link">
                <Box display="flex" alignItems="center" p={1.5}>
                  <Home className="heaeder-icon" sx={{ color:'black'}}/>
                  <Box className="header-text" mx={2}>Home</Box>
                </Box>
              </button>
          </NavLink>

          <NavLink to="/explore">
              <button className="header-link">
                <Box display="flex" alignItems="center" p={1.5}>
                  <Tag className="heaeder-icon" sx={{ color:'black' }}/>
                  <Box className="header-text" mx={2}>Explore</Box>
                </Box>
              </button>
          </NavLink>

          <NavLink to={`/user/${ user.username }`} >
              <button className="header-link">
                <Box display="flex" alignItems="center" p={1.5}>
                  <PersonOutlineOutlined className="heaeder-icon" sx={{ color:'black' }}/>
                  <Box className="header-text" mx={2}>Profile</Box>
                </Box>
              </button>
          </NavLink>

        </Box>

        <Box className="header-btn-tweet" width="234px" height="52px" my="16px" display="flex">
          <button onClick={ openTweetModal }>
            Tweet
          </button>
        </Box>

        <Box className="header-btn-tweet-sm" my="16px" display="none" justifyContent="center">
          <button onClick={ openTweetModal }>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CreateOutlined sx={{ color:'white', fontSize:'30px' }}/>
            </Box>
          </button>
        </Box>

      </Box>

      <UserButton {...user}/>

    </Box>
  )
}

