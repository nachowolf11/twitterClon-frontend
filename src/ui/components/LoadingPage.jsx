import { Box } from "@mui/material"
import { MoonLoader } from "react-spinners"

export const LoadingPage = () => {
  return (
    <Box display="flex" width="100%" justifyContent="center" alignItems="center">      
      <MoonLoader
        color="#1d9bf0"
        cssOverride={{}}
        size={30}
        speedMultiplier={0.7}
      />
    </Box>
  )
}
