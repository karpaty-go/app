import React from 'react'
import { NavLink } from "react-router-dom";
import { useStyles } from './style';

const CustomizedNavLink = (props) =>{
const classes = useStyles()
  const {to,label } = props

  return(<NavLink
    exact
    to = {to}
    className={classes.toolbarLink}
    activeClassName = {classes.activeLink}
  >
    {label?.toUpperCase()}
  </NavLink>)
}

export default CustomizedNavLink