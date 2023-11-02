import { Box, Typography } from "@mui/material";
import { useUiStore } from "../../hooks";
import { KeyboardBackspace } from "@mui/icons-material";
import { useState } from "react";


export const Terms = () => {

const { setSignupStep } = useUiStore();

const [check, setCheck] = useState(true)

const onSetCheck = () => {
  setCheck(!check)
}

const onPreviousStep = () => {
    setSignupStep('CreateAccount');
}

const onFollowingStep = () => {
  setSignupStep('Password');
}

  return (
    <>
    <Box display="flex" flexDirection="row" p={1} mb={2}>
        <Box display="flex" justifyContent="center" alignItems="center" className="close" onClick={ onPreviousStep }>
            <KeyboardBackspace sx={{ fontSize:'20px' }}/>
        </Box>
        <Box flexGrow={1}><Typography px={5} sx={{ fontSize:'20px', fontWeight:'bold' }}>Step 2 of 3</Typography></Box>
    </Box>

    <Box display="flex" flexDirection="column" width="100%" px="80px">
      <Typography mb={5} sx={{ fontSize:'30px', fontWeight:'bold' }}>Personalize your experience</Typography>
      
      <Typography component="span" mb={2.5} sx={{ fontWeight:'bold', fontSize:'20px', lineHeight:'20px' }}>
        Record where you see Twitter content on the web
      </Typography>
      <Box display="flex" alignItems="start">
        <Typography component="span" mb={6} pr={1} sx={{ lineHeight:'17px', fontSize:'16px' }}>
          Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email or phone number.
        </Typography>
        <input style={{ height:'20px', width:'40px', margin:'0px' }} type="checkbox" checked={check} onChange={onSetCheck}/>
      </Box>
      <Typography component="span" mb={22.5} pr={1} sx={{ lineHeight:'17px', fontSize:'16px' }}>
        By registering, you agree to our <Typography component="span" sx={{ color:'primary.main' }}>Terms, Privacy Policy and Cookie Policy</Typography>. Twitter may use your contact information, such as your email address and phone number, for the purposes described in our Policy of privacy.<Typography component="span" sx={{ color:'primary.main' }}> More information</Typography>
      </Typography>

      <Box display="flex" justifyContent="center" pb={3}>
        <button className="btn-modal following" disabled={!check} style={{ width:'438px', height:'50px'}} onClick={onFollowingStep}>Following</button>
      </Box>

    </Box>

    </>
  )
}
