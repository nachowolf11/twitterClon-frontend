import { Close } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useAuthStore, useForm, useUiStore } from "../../hooks";

const signupFormFields = {
    name:'',
    email:'',
    password:'',
    day:'01',
    month:'01',
    year: '1900'
}

const formValidations = {
    email: [ (value) => value.includes('@') && value.includes('.com'),'Email format invalid.' ],
    name: [ (value) => value.length >= 1,'Name is required' ],
    day: [ (value) => value.length >= 1,'Day is required' ],
    month: [ (value) => value.length >= 1,'Month is required' ],
    year: [ (value) => value.length >= 1,'Year is required' ],

  }

export const CreateAccount = ({onCloseModal}) => {
const { setSignupStep } = useUiStore();
const { startRegister } = useAuthStore();

const {
    onInputChange,
    name,
    email,
    username,
    day,
    month,
    year,
    birthday,
    isFormValid
 } = useForm(signupFormFields, formValidations);

const onSubmit = (e) => {
    e.preventDefault();
    startRegister({ name, email, birthday, username })
    setSignupStep('Terms');
}

  return (
    <>
    <Box display="flex" flexDirection="row" p={1} mb={2}>
        <Box display="flex" justifyContent="center" alignItems="center" className="close" onClick={ onCloseModal }>
            <Close sx={{ fontSize:'22px' }}/>
        </Box>
        <Box flexGrow={1}><Typography px={5} sx={{ fontSize:'20px', fontWeight:'bold' }}>Step 1 of 3</Typography></Box>
    </Box>

    <Box display="flex" flexDirection="column" width="100%" px="80px">
        <Typography mb={3} sx={{ fontSize:'30px', fontWeight:'bold' }}>Create account</Typography>
        
        <form onSubmit={onSubmit}>
            <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={3}>
                <input 
                    type="text" 
                    required
                    className="input-modal"
                    value={ name || '' }
                    name='name'
                    onChange={onInputChange}
                />
                <span>Name</span>
            </Box>

            <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={3}>
                <input 
                    type="text" 
                    required
                    className="input-modal"
                    value={ email || '' }
                    name='email'
                    onChange={onInputChange}
                />
                <span>Email</span>
            </Box>

            <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={3}>
                <input 
                    type="text" 
                    required
                    className="input-modal"
                    value={ username || '' }
                    name='username'
                    onChange={onInputChange}
                />
                <span>Username</span>
            </Box>

            <Typography component="h3" mb={1} sx={{ fontWeight:'bold' }}>Birthday</Typography>
            <Typography component="span" mb={2.5} sx={{ lineHeight:'16px', fontSize:'15px' }}>
                This information will not be public. Confirm your own age, even if this account is for a business, pet, or something else.
            </Typography>

            <Box display="flex" mb={1.5}>
                <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={6} width="208px" mr="12px">
                    <input
                        type="text" 
                        inputMode="numeric"
                        maxLength={2}
                        required
                        placeholder="mm"
                        className="input-date-modal"
                        value={ month || '' }
                        name='month'
                        onChange={onInputChange}
                    />
                    <span className="date-span">Month</span>
                </Box>
                <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={6} width="89.5px" mr="12px">
                    <input 
                        type="text" 
                        inputMode="numeric"
                        maxLength={2}
                        required
                        placeholder="dd"
                        className="input-date-modal"
                        value={ day || '' }
                        name='day'
                        onChange={onInputChange}
                    />
                    <span className="date-span">Day</span>
                </Box>
                <Box className="div-input-modal" position="relative" display="flex" alignItems="center" mb={6} width="112.5px">
                    <input 
                        type="text" 
                        inputMode="numeric"
                        maxLength={4}
                        required
                        placeholder="yyyy"
                        className="input-date-modal"
                        value={ year || '' }
                        name='year'
                        onChange={onInputChange}
                    />
                    <span className="date-span">Year</span>
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" pb={3}>
                <button className="btn-modal following" type="submit" disabled={!isFormValid} style={{ width:'438px', height:'50px'}}>Following</button>
            </Box>
        </form>

    </Box>
    </>
  )
}
