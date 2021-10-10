import React from 'react'
import { useStyles } from './style';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
const FIRST_PAGE = 1

const Logo = () =>{
    const classes = useStyles()
    return(
        <NavLink className = {classes.logoWrapper} to = {`/?current-page=${FIRST_PAGE}`}> 
           <img src={logo} alt='logo' className = {classes.logoImage}/>
        </NavLink>
    )
}

export default Logo