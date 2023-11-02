import { Box, Typography } from "@mui/material"

export const TopHome = ({ tweetFilter, setTweetFilter }) => {

  return (
    <>
    <div
        style={{
            position: 'sticky', 
            top: 0, 
            backgroundColor: 'rgba(255,255,255,0.8)', 
            width: '100%', 
            height:'107px', 
            backdropFilter:'blur(12px)',
            borderBottom:  '1px rgb(238, 238, 238) solid'
            }}>
      <Box width="100%" maxWidth="599px" height="100%" >
        
        <Box display="flex" flexDirection="column" height="100%">

            <Box display="flex" flexGrow={1} px={2} py={1}>
                <Typography sx={{ fontSize:'20px', fontWeight:'bold' }}>Home</Typography>
            </Box>

            <Box display="flex" flexDirection="row" flexGrow={1} alignItems="center">
                <Box className="btn" display="flex" justifyContent="center" width="100%" height="100%" onClick={ ()=> setTweetFilter( undefined ) }>
                    <Box position="relative">
                        <Typography py={2} sx={{
                            fontWeight: tweetFilter ? 'none' : 'bold',
                        }}>For you</Typography>
                        <Box sx={{ 
                            backgroundColor:'primary.main', 
                            width:'56px', 
                            height:'4px',
                            position:'absolute',
                            bottom:'0px',
                            display: tweetFilter ? 'none' : 'block',
                            }}></Box>
                    </Box>
                </Box>
                <Box className="btn" display="flex" justifyContent="center" width="100%" height="100%" onClick={ ()=> setTweetFilter( 'following' ) }>
                    <Box position="relative">
                        <Typography py={2} sx={{
                            fontWeight: tweetFilter === 'following' ? 'bold' : 'none',
                        }}>Following</Typography>
                        <Box sx={{ 
                            backgroundColor:'primary.main', 
                            width:'70px', 
                            height:'4px',
                            position:'absolute',
                            bottom:'0px',
                            display: tweetFilter === 'following' ? 'block' : 'none',
                            }}></Box>
                    </Box>
                </Box>
            </Box>

        </Box>

      </Box>


    </div>
    </>
  )
}
