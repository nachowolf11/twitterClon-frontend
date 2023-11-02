import { Twitter } from "@mui/icons-material"
import { Box } from "@mui/material"

export const HeaderMobileLogout = () => {
  return (
    <>
    <Box 
      display="flex" 
      flexDirection="row" 
      alignItems="center"
      px={2}
      height="53px"
      width="100vh"
      bgcolor="white"
      position="fixed"
      top="0"
    >
        <Box width="56px">
          <Twitter sx={{ fontSize:'28px', color:'primary.main' }}/>
        </Box>
        
    </Box>
    <Box height="53px"></Box>
    </>
  )
}
