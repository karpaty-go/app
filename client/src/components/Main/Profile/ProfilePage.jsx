import React from 'react'
import Box from '@material-ui/core/Box';
import {makeStyles } from '@material-ui/core'
import AsideNav from './NavAside/NavAside'
import ProfileRouter from './Pages/Router'

const useStyles = makeStyles((theme) => ({
  
}));

const ProfilePage = (props) => {
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <AsideNav/>
      <ProfileRouter/>
    </Box>
  );
}

export default ProfilePage


{/* <TextField
          placeholder="Placeholder"
          multiline
          InputProps={{ disableUnderline: true }}
          style={{
            width: "100vw"
          }}
        /> */}