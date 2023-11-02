import { SettingsOutlined, Tag, Twitter } from "@mui/icons-material"
import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import '../../styles/header.css'

export const HeaderLogout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box sx={{ display:'flex', flexDirection:'column' }}>

        <NavLink to="/">
            <button className="header-link">
            <Box display="flex" alignItems="center" p={1.5}>
                <Twitter className="heaeder-icon" color="primary"/>
              </Box>
            </button>
        </NavLink>

        <Box sx={{ display:'flex', flexDirection:'column' }}>
          <NavLink to="/">
              <button className="header-link">
                <Box display="flex" alignItems="center" p={1.5}>
                  <Tag className="heaeder-icon" sx={{ color:'black' }}/>
                  <Box className="header-text" mx={2} sx={{ fontWeight:'bold' }}>Explore</Box>
                </Box>
              </button>
          </NavLink>
        </Box>


      </Box>
    </Box>
  )
}
