import { Box, Typography } from "@mui/material"
import '../../styles/asideLogout.css'
import { useEffect } from "react";
import { Apple } from "@mui/icons-material";
import { useUiStore } from "../../hooks";

const windowWidth = screen.width
let btnGoogleWidth = 298

export const AsideLogout = () => {

    const { openModal, setModalType, setSignupStep } = useUiStore();

    const onCreateAccount = () => {
        setModalType('signup');
        setSignupStep('CreateAccount');
        openModal();
    }

  return (
    <Box component="aside" width="348px">
        <Box
            display="flex"
            flexDirection="column"
            className="aside-container"
        >
            <Box>
                <Typography sx={{ fontSize:'20px', fontWeight:'bold', marginBottom:'12px'}}>New to Twitter?</Typography>
                <Typography sx={{ fontSize:'14px', lineHeight:'20px' }}>Sign up now to get your own personalized timeline.</Typography>
            </Box>

            <Box display="flex" flexDirection="column" pb={2}>
                <Box id='signInDiv'></Box>
                {/* <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div> */}
                <button className="btn-aside" onClick={ onCreateAccount }>Create account</button>
            </Box>

            <Box>
                <Typography className="aside-terms" sx={{ fontSize: '14px', lineHeight:'15px' }}>
                    By registering, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including the <span>Use of Cookies policy</span>.
                </Typography>
            </Box>

        </Box>
        
        <Box display="flex" flexWrap="wrap" className="aside-links" px={2}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies policy</span>
            <span>Accessibility</span>
            <span>Announcement Information</span>
            <span>More options</span>
            <span>© 2023 X Corp.</span>
        </Box>
    
    </Box>
  )
}
