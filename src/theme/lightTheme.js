import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#1d9bf0',
          contrastText: '#000000',
        },
        text:{
          light: '#73767c'
        }
      },
      typography: {
        "fontFamily": `"Chirp"`,
        "fontSize": 14,
        "fontWeightLight": 200,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
       }
})