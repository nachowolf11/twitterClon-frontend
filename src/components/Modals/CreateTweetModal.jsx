import { Box } from "@mui/material"
import { useUiStore } from "../../hooks"
import { useEffect } from "react";
import { TweetForm } from "../TweetForm";
import { Close } from "@mui/icons-material";

export const CreateTweetModal = () => {

    const { isTweetModalOpen, closeTweetModal } = useUiStore();

    useEffect(() => {
        if( isTweetModalOpen ){
            document.querySelector('html').style.overflow = 'hidden'
        }else{
            document.querySelector('html').style.overflow = ''
        }
    }, [isTweetModalOpen])

    const handleClickOut = (e) => {
      if( e.target === e.currentTarget ){
        closeTweetModal();
      }
    }
    
  return (
    <Box 
      display={ isTweetModalOpen ? 'flex' : 'none'}
      justifyContent="center"
      alignItems="start"
      height="100vh"
      width="100vw"
      bgcolor="rgba(0, 0, 0, 0.400)"
      position="fixed" top="0px" left="0px"
      onClick={ handleClickOut }  
      zIndex="6"
    >
      <Box width="600px" bgcolor="white" mt="46px" borderRadius="15px" border="none">
        <Box display="flex" p="10px">
            <Box className="btn" display="flex" alignItems="center" onClick={closeTweetModal} sx={{ borderRadius:'99px', p:'5px' }}>
              <Close sx={{ fontSize:'22px'}}/>
            </Box>
        </Box>
        <TweetForm/>
      </Box>
      

    </Box>
  )
}
