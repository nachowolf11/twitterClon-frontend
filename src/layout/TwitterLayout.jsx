import { Box } from "@mui/material"
import '../styles/layout.css'

export const TwitterLayout = ({header, main, aside, footer}) => {
  return (
    <Box
      className="container"
      width="100%"
      minHeight="845px"
      display="flex"
    >

      <Box
        className="header-web"
        component="header"
        //Si lo activo queda por arriba del modal.
        zIndex="5"
        display="flex"
        justifyContent="end"
        flexGrow="1"
      >
          <Box
            className="header-container"
            width="275px"
            height="100%"
            >
            <Box
              className="header-container-fixed"
              position="fixed"
              width="275px"
              height="100%"
            >
              <Box height="100%">
                { header }
              </Box>
            </Box>
          </Box>

      </Box>
      

      <Box
        component="main"
        display="flex"
        alignItems="start"
        flexGrow="1"
      >
          <Box
            className="main-container"
            width="990px"
            display="flex"
            justifyContent="space-between"
          >
            <Box className="main-content" position="relative" maxWidth="600px" width="100%">
              { main }
            </Box>

            <Box className="main-aside" mr="10px" width="350px" minHeight="510px">
              <Box position="fixed">
                { aside }
              </Box>
            </Box>

          </Box> 
      </Box>
      
      <Box
        position="fixed"
        bottom="0"
        width="100vw"
      >
        {footer}
      </Box>

    </Box>
  )
}
