import { Box, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';


export const Footer =() => {

  return (
    <Box component='footer' sx={{display:'flex', justifyContent: 'center', backgroundColor: 'gray', position: 'fixed', bottom: 0, right: 0, left: 0}} component='footer'>
      <CopyrightIcon/>
      <Typography>Power by</Typography>
      <Typography>YonalDev</Typography>
    </Box>
  )
}