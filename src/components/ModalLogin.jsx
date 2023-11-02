import { Box, Typography } from "@mui/material"
import { useAuthStore, useForm, useUiStore } from "../hooks";
import { Close, Twitter } from "@mui/icons-material";

const loginFormFields = {
    principal: '',
    password: ''
  }

export const ModalLogin = ({onCloseModal}) => {
// Manejo del modal
const { setModalType } = useUiStore();

const onSignup = () => {
setModalType('signup');
}

// Manejo de Login
const { startLogin, errorMessage } = useAuthStore();

const { principal, password, onInputChange } = useForm( loginFormFields );

const onSubmit = async( event ) => {
    event.preventDefault();
    await startLogin({ principal, password });
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
        <Typography sx={{ fontSize:'32px', fontWeight:'bold', width:'300px' }}>Log in to Twitter</Typography>
    </Box>

    <Box id='signInDiv2' display="flex" justifyContent="center" pb={2}></Box>

    <form onSubmit={ onSubmit }>
        <Box display="flex" justifyContent="center" pb={3}>
            <Box className="div-input-modal" width="300px" position="relative" display="flex" alignItems="center">
                <input 
                    className="input-modal"
                    type="text" 
                    required
                    value={ principal || '' }
                    name='principal'
                    onChange={onInputChange}
                />
                <span>Email or username</span>
            </Box>
        </Box>

        <Box display="flex" justifyContent="center"  pb={3}>
            <Box className="div-input-modal" position="relative" width="300px" display="flex" alignItems="center">
                <input 
                    className="input-modal"
                    type="password"
                    required
                    value={ password || '' }
                    name='password'
                    onChange={onInputChange}  
                />
                <span>Password</span>
            </Box>
        </Box>


        <Box display="flex" justifyContent="center" pb={1}>
            <button className="btn-login-modal following" type="submit">Following</button>
        </Box>
    </form>

    <Box display="flex" justifyContent="center" pb={5}>
        <button className="btn-login-modal password">Forgot your password?</button>
    </Box>

    <Box display="flex" justifyContent="center" pb={3}>
        <Typography component="span" width="300px">Don´t have an account? 
            <Typography variant="span" component="span" color="primary.main" sx={{ cursor:'pointer' }} onClick={ onSignup }>Sign up
        </Typography></Typography>
    </Box>

    <Box display={errorMessage ? 'flex' : 'none'} justifyContent="center">
        <Typography sx={{ bgcolor: 'primary.main', color:'white', borderRadius:'2.5px', padding:'10px' }}>Wrong Credentials</Typography>
    </Box>
    </>
  )
}
