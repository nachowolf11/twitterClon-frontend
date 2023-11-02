import { KeyboardBackspace } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useAuthStore, useForm, useUiStore } from "../../hooks";

const signupFormFields = { password:'', password2:'' }

const formValidations = {
    password: [ (value) => value.length >= 6,'Password must be at least 6 characters long' ],
  }

export const Password = () => {
const { setSignupStep, closeModal } = useUiStore();
const { endRegister, signupData } = useAuthStore();

const {
    onInputChange,
    password,
    password2,
    isFormValid
 } = useForm(signupFormFields, formValidations);

const onSubmit = async(e) => {
    e.preventDefault();
        
    if( password !== password2 ){
        return
    }
    await endRegister({ ...signupData, password });

    closeModal();
}

const onPreviousStep = () => {
    setSignupStep('Terms');
}

  return (
    <>
    <Box display="flex" flexDirection="row" p={1} mb={2}>
        <Box display="flex" justifyContent="center" alignItems="center" className="close" onClick={ onPreviousStep }>
            <KeyboardBackspace sx={{ fontSize:'20px' }}/>
        </Box>
        <Box flexGrow={1}><Typography px={5} sx={{ fontSize:'20px', fontWeight:'bold' }}>Step 3 of 3</Typography></Box>
    </Box>

    <Box display="flex" flexDirection="column" width="100%" px="80px">
        <Typography mb={3} sx={{ fontSize:'30px', fontWeight:'bold' }}>Create a password</Typography>
        
        <form onSubmit={onSubmit}>
            <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={3}>
                <input 
                    type="password" 
                    required
                    className="input-modal"
                    value={ password || '' }
                    name='password'
                    onChange={onInputChange}
                />
                <span>Password</span>
            </Box>

            <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={6}>
                <input 
                    type="password" 
                    required
                    className="input-modal"
                    value={ password2 || '' }
                    name='password2'
                    onChange={onInputChange}
                />
                <span>Confirm your password</span>
            </Box>

            <Box display="flex" justifyContent="center" pb={3}>
                <button type="submit" className="btn-modal following" disabled={!isFormValid} style={{ width:'438px', height:'50px'}}>Following</button>
            </Box>
        </form>

    </Box>
    </>
  )
}
