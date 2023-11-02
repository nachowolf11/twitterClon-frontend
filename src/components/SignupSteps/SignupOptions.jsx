import { Apple, Close, Twitter } from '@mui/icons-material'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useUiStore } from '../../hooks';

export const SignupOptions = ({onCloseModal}) => {

const { setSignupStep, setModalType } = useUiStore();

const onSetSignupStep = () => {
    setSignupStep('CreateAccount');
}

const onLogin = () => {
    setModalType('login');
}

  return (
    <>
    <Box display="flex" flexDirection="row" px="16px" pt={1}>
        <Box display="flex" justifyContent="center" alignItems="center" className="close" onClick={ onCloseModal }>
            <Close sx={{ fontSize:'22px' }}/>
        </Box>
        <Box flexGrow={1} textAlign="center"><Twitter sx={{color:"primary.main", fontSize:'36px'}}/></Box>
    </Box>  

    <Box display="flex" justifyContent="center" py={3}>
        <Typography sx={{ fontSize:'32px', fontWeight:'bold', width:'300px' }}>Join Twitter today</Typography>
    </Box>

    <Box display="flex" justifyContent="center" pb={3}>
        <button className="btn-modal following" onClick={onSetSignupStep}>Create account</button>
    </Box>

    <Box display="flex" justifyContent="center" pb={4}>
        <Typography className="aside-terms" sx={{ fontSize: '14px', lineHeight:'15px', width:'300px' }}>
            By registering, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including the <span>Use of Cookies policy</span>.
        </Typography>
    </Box>   

    <Box display="flex" justifyContent="center" pb={3}>
        <Typography component="span" width="300px">Already have an account?
            <Typography variant="span" component="span" color="primary.main" sx={{ cursor:'pointer' }} onClick={ onLogin }>Log in</Typography>
        </Typography>
    </Box> 
    </>
  )
}
