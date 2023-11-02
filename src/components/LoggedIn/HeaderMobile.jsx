import { CreateOutlined, Home, LogoutOutlined, PersonOutlineOutlined, Search } from "@mui/icons-material"
import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useAuthStore, useUiStore } from "../../hooks"

export const HeaderMobile = () => {

    const {user, startLogout} = useAuthStore();

    const { openTweetModal } = useUiStore();

    const handleLogout = () => {
        startLogout();
    }

  return (
    <Box
        className="footer-mobile-loggedin"
        display="none"
        position="relative"
        flexDirection="column"
    >

        <Box sx={{ position:'absolute', right:'20px', top:'-80px' }}>
        <Box className="header-btn-tweet-sm" justifyContent="center">
          <button onClick={openTweetModal}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CreateOutlined sx={{ color:'white', fontSize:'30px' }}/>
            </Box>
          </button>
        </Box>
        </Box>

        <Box display="flex" justifyContent="space-around" alignItems="center" width="100%" height="52.5px" bgcolor="white" borderTop="1px rgb(238, 238, 238) solid">

            <NavLink to="/home">
                <Box display="flex" alignItems="center" p={1.5}>
                    <Home className="heaeder-icon" sx={{ color:'black'}}/>
                </Box>
            </NavLink>

            <NavLink to="/explore">
                <Box display="flex" alignItems="center" p={1.5}>
                    <Search className="heaeder-icon" sx={{ color:'black'}}/>
                </Box>
            </NavLink>

            <NavLink to={`/user/${user.username}`}>
                <Box display="flex" alignItems="center" p={1.5}>
                    <PersonOutlineOutlined className="heaeder-icon" sx={{ color:'black'}}/>
                </Box>
            </NavLink>

            <Box onClick={handleLogout}>
                <Box display="flex" alignItems="center" p={1.5}>
                    <LogoutOutlined className="heaeder-icon" sx={{ color:'black'}}/>
                </Box>
            </Box>

        </Box>

    </Box>
  )
}
