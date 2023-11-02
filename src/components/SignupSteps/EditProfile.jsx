import { Close, PhotoCameraOutlined } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useAuthStore, useForm } from "../../hooks"
import { BarLoader } from "react-spinners"
import { useState } from "react";

export const EditProfile = ({onCloseModal}) => {

const { user, startUpdateUser } = useAuthStore();
const [loading, setLoading] = useState(false)

const {
    onInputChange,
    name,
    location,
    profilePicture,
    file,
    fileInputRef,
    onFileInputChange,
} = useForm(user);

const onHandleSave = async() => {
    console.log('Handling Save...');
    setLoading(true);
    await startUpdateUser({name, location, file, profilePicture:user.profilePicture});
    onCloseModal();
    setLoading(false);
}



    return (
        <>
        <Box display="flex" justifyContent="center" width="100%" bgcolor="white" height="10px">
            <Box display={ loading ? 'block' : 'none' }>
                <BarLoader
                    color="#1d9bf0"
                    width={600}
                />
            </Box>
        </Box>
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            padding:'8px',
            marginBottom:'16px',
            position:'sticky'
        }}>
            
            <Box display="flex" justifyContent="center" alignItems="center" className="close" onClick={ onCloseModal }>
                <Close sx={{ fontSize:'22px' }}/>
            </Box>
            <Box flexGrow={1}><Typography px={5} sx={{ fontSize:'22px', fontWeight:'bold' }}>Edit profile</Typography></Box>
            <Box className="user-btn-follow" display="flex" alignItems="center"
                onClick={onHandleSave}
                sx={{
                    textAlign:'center',
                    px:'15px',
                    py:'2.5px',
                    borderRadius:'99px',
                    fontWeight:'bold',
                    mr:'15px'
                }}
            >
                Save
            </Box>
        </div>
        <Box display="flex" flexDirection="column">

            <Box height="200px" width="100%" bgcolor="grey"></Box>
                <Box position="relative" width="25%" minWidth="48px" mb="12px" mt="-3rem" ml="1rem">
                    <Box pb="100%"></Box>
                    <Box position="absolute" height="120px" width="120px" top="0px" sx={{ borderRadius:'99px', border:'white 4px solid' }}>
                        <img className="user-img" style={{ objectFit: '', width:'100%', height:'100%', borderRadius:'99px' }} src={profilePicture} alt="" />
                    </Box>
                    <Box position="absolute" height="120px" width="120px" top="0px">
                        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                            <Box 
                                display="flex" 
                                justifyContent="center" 
                                alignItems="center"  
                                sx={{ 
                                    borderRadius:'99px',
                                    bgcolor:"rgba(0, 0, 0, 0.5)",
                                    p:"10px",
                                    transition:'.2s',
                                    ':hover':{bgcolor:'rgba(63, 63, 63, 0.5)', transition:'.2s'}
                                }}>
                                <PhotoCameraOutlined sx={{ color:'rgba(255, 255, 255, 0.8)' }} onClick={() => fileInputRef.current.click()}/>
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={ onFileInputChange }
                                    style={{ display: 'none' }}
                                    ref={ fileInputRef }
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box  px="12px" py="16px">
                    <Box className="div-input-modal" position="relative" display="flex" alignItems="center">
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
                </Box>

                <Box  px="12px" py="16px">
                    <Box className="div-input-modal" position="relative" display="flex" alignItems="center">
                        <input 
                            type="text" 
                            required
                            className="input-modal"
                            value={ location || '' }
                            name='location' 
                            onChange={onInputChange}
                        />
                        <span>Location</span>
                    </Box>
                </Box>

        </Box>
        
        </>
    )
    }
