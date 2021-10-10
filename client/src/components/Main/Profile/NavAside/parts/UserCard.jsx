import React from 'react'
import Box from '@material-ui/core/Box';
import { Switch } from 'react-router-dom'
import PrivateRoute from '../../../../Reused-components/PrivateRoute';
import {Avatar, Typography} from '@material-ui/core';


const UserCard = (props) => {
  return (<Box style = {{display:'flex', flexDirection:'column', alignItems:'center',padding:'15px'}}>
    <Avatar
      alt="Remy Sharp"
      src="https://drive.google.com/uc?export=view&id=18g47OijUV8pgwYKpETEk8hfye7Z0n9WR"
      style={{ width: '110px', height: '110px'}}
    />
    <Typography style ={{
    fontSize: '30px',
    fontWeight: 500
    }}>
      karpaty - Go !
    </Typography>

  </Box>)
}

export default UserCard
