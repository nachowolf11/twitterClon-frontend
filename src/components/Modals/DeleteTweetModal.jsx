import { Box, Button, Typography } from "@mui/material"
import { useUiStore } from "../../hooks"
import { useEffect } from "react";

export const DeleteTweetModal = () => {

    const { deleteTweet:deleteTweetState, closeDeleteTweetModal } = useUiStore();
    const {isModalOpen, tweetID, funct} = deleteTweetState;


    useEffect(() => {
        if( isModalOpen ){
            document.querySelector('html').style.overflow = 'hidden'
        }else{
            document.querySelector('html').style.overflow = ''
        }
    }, [isModalOpen])

    const handleClickOut = (e) => {
      if( e.target === e.currentTarget ){
        closeDeleteTweetModal();
      }
    }

    const handleDelete = () => {
        funct(tweetID);
        closeDeleteTweetModal();
    }
    
  return (
    <Box 
      display={ isModalOpen ? 'flex' : 'none'}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      bgcolor="rgba(0, 0, 0, 0.400)"
      position="fixed" top="0px" left="0px"
      onClick={ handleClickOut }  
      zIndex="6"
    >
      <Box display="flex" flexDirection="column" width="320px" p="32px" bgcolor="white" mt="46px" borderRadius="15px" border="none">
        <Typography component='h3' sx={{ fontWeight:'bold', fontSize:'20px', mb:'10px' }}>Do you want to delete the post?</Typography>
        <Typography component="p" sx={{ color:'text.light' }}>
            This action cannot be reversed, and will be removed from your profile, the timeline of accounts that follow you, and search results.
        </Typography>
        <Button onClick={handleDelete} sx={{ width:'100%', bgcolor:'rgb(244, 33, 46)', color:'white', border:'1px solid rgb(244, 33, 46)', borderRadius:'99px', fontWeight:'bold', py:'10px', mt:'20px' }}>
            Delete
        </Button>
        <Button onClick={closeDeleteTweetModal} sx={{ width:'100%', bgcolor:'white', color:'black', border:'1px solid #bebfc4', borderRadius:'99px', fontWeight:'bold', py:'10px', mt:'10px' }}>Cancel</Button>
      </Box>
    </Box>
  )
}
