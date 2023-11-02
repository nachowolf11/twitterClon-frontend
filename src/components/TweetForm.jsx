import { EmojiEmotionsOutlined, EventOutlined, FormatListBulletedOutlined, GifBoxOutlined, ImageOutlined, LocationOnOutlined } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import { useTweetForm } from "../hooks";

export const TweetForm = () => {

const { textToTweet, handleChange, handleSubmit, profilePicture } = useTweetForm();

  return (
    <Box display="flex" px={2} py="12px">

      <Box width="48px" mr="12px">
        <img style={{ objectFit: '', width:'40px', height:'40px', borderRadius:'99px' }} src={profilePicture}/>
      </Box>

      <Box maxWidth="506px" width="100%" display="flex" flexDirection="column">
        <form onSubmit={ handleSubmit }>

          <Box display="flex" flexDirection="column" mb="12px"  borderBottom="1px rgb(238, 238, 238) solid">
            <TextField
              onChange={handleChange}
              className="textarea-tweet"
              placeholder="What is happening?!"
              multiline
              maxRows={15}
              value={textToTweet}
              inputProps={{ style: { fontSize:'20px' } }}
              sx={{ 
                "& fieldset": { border: 'none' },
              }}
            />
          </Box>
          
          <Box display="flex" justifyContent="space-between">

            <Box display="flex" alignItems="center">
              <ImageOutlined sx={{ mr:'10px', fontSize:'20px', color: 'primary.main' }}/>
              <GifBoxOutlined sx={{ mr:'10px', fontSize:'20px', color: 'primary.main' }}/>
              <FormatListBulletedOutlined sx={{ mr:'10px', fontSize:'20px', color: 'primary.main' }}/>
              <EmojiEmotionsOutlined sx={{ mr:'10px', fontSize:'20px', color: 'primary.main' }}/>
              <EventOutlined sx={{ mr:'10px', fontSize:'20px', color: 'primary.main' }}/>
              <LocationOnOutlined sx={{ fontSize:'20px', color: 'primary.main' }}/>
            </Box>

            <Box>
              <button type="submit" disabled={textToTweet.length === 0 ? true : false} className='btn-tweet'>Tweet</button>
            </Box>

          </Box>

        </form>
      </Box>

    </Box>
  )
}
