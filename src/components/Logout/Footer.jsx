import { Box, Button, Typography } from "@mui/material"
import '../../styles/footer.css'
import { useUiStore } from "../../hooks"

export const Footer = () => {

  const { openModal, setModalType } = useUiStore();

  const onLoginClick = () => {
    setModalType('login');
    openModal();
  }

  const onSignupClick = () => {
    setModalType('signup');
    openModal();
  }

  return (
    <Box
        className="footer"
        // position="fixed"
        // bottom="0"
        bgcolor="primary.main"
        color="white"
        // width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="3"
        height="72px"
    >

      <Box
        className="footer-space"
        sx={{ width: '275px'}}
      ></Box>

      <Box className="footer-container" display="flex" justifyContent="space-between" width="990px">
        <Box className="footer-text">
          <Typography sx={{ fontSize: '1.5em', fontWeight: 'bold' }}>Do not miss what is happening</Typography>
          <Typography sx={{ fontSize: '0.95em', lineHeight:'10px' }}>Twitter users are the first to know.</Typography>
        </Box>

        <Box
          className="btn-footer"
          m={1.5}
          display="flex"
          alignItems="center"
        >
          <Button
            className="btn-login"
            onClick={ onLoginClick }
            sx={{ color:'primary.main', mr:1, border: '1px solid white'}}
          >Log in</Button>
          <Button
            className="btn-signup"
            onClick={ onSignupClick }
            sx={{ color:'black', bgcolor:'primary.main'}}
          >Sign up</Button>
        </Box>
      </Box>

    </Box>
  )
}
