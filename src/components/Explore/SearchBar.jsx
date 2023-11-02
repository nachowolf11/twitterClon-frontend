import { Search, SettingsOutlined } from "@mui/icons-material"
import { Box, InputAdornment, TextField, Typography } from "@mui/material"
import { useSearchBar } from "../../hooks";
import { ResultItem } from "../";

export const SearchBar = ({setText}) => {

const {
    handleChange,
    results,
    loading,
    query,
    resultContainerRef,
    inputRef,
    handleSubmit,
    handleInputFocus,
    handleInputBlur,
} = useSearchBar(setText);



  return (
    <div
        style={{
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(255,255,255,0.8)', 
        width: '100%',  
        backdropFilter:'blur(12px)',
    }}>
        <form onSubmit={handleSubmit}>

            <Box display="flex" justifyContent="space-between" width="100%" px="16px" py="5px">
                <Box className="searchbar" flexGrow={1} position="relative" >
                    <TextField
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleChange}
                        inputRef={inputRef}
                        placeholder="Search Twitter"
                        InputProps={{ 
                            startAdornment: <InputAdornment disablePointerEvents position="start"><Search sx={{fontSize:'22px'}}/></InputAdornment>,
                        }}
                        inputProps={{ autoComplete:'off' }}
                        sx={{
                            borderRadius:'99px', bgcolor:'rgb(234, 239, 240)', width:'100%', border:'1px solid rgb(234, 239, 240)',
                            ':focus-within':{bgcolor:'white', border: '1px solid #1d9bf0'},
                            "input": {padding: '10px'},
                            "input::placeholder":{opacity: '0.8', fontSize:'15px'},
                            "fieldset":{ border: 'none'},
                        }}
                        
                        />
                    <Box
                        ref={resultContainerRef}
                        sx={{ 
                            position: 'absolute',
                            width:'100%',
                            maxHeight:'400px',
                            overflowY:'scroll',
                            bgcolor:"white",
                            boxShadow:  '0px 0px 6px 1px rgba(0, 0, 0, 0.15)',
                            borderRadius:'8px',
                            display:'none',
                        }}>
                            {
                                query.length === 0 
                                ?
                                <Box display="flex" justifyContent="center" alignItems="center" height="100px">
                                    <Typography sx={{ color:'text.light'}}>Try searching for people, topics, or keywords</Typography>
                                </Box>
                                :
                                <Box display="flex" width="100%" py="12px" px="16px" sx={{ cursor:'pointer' }} onClick={handleSubmit}>
                                    <Box display="flex" justifyContent="center" alignItems="center" mr="12px" width='56px' height='56px'><Search sx={{ fontSize:'40px' }}/></Box>
                                    <Box display="flex" alignItems="center"><Typography>{query}</Typography></Box>
                                </Box>
                            }
                            {
                                results.map( user => {
                                    return <ResultItem key={user._id} {...user}/>
                                } )
                            }
                    </Box>
                </Box>
            </Box>

        </form>
    </div>
  )
}
