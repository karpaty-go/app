import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { useStyles } from './style';
import {NAVIGATION} from '../../constants/navigation'
import Button from '@material-ui/core/Button';
import * as screenSizes from '../../constants/screen-sizes'
import Toolbar from '@material-ui/core/Toolbar';
import SearchInput from '../Reused-components/Search-input';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import {logOut} from '../../redux/action-creators'
import CustomizedNavLink from '../Reused-components/CustomizedNavLink'
const {MD} = screenSizes

  const { BACKPACK,ROUTES,USEFUL_ARTICLES,ABOUT_US, LOG_IN, LOG_OUT, SEARCH_PLACEHOLDER, ACCOUNT} = NAVIGATION
  const FIRST_PAGE = 1
  const links = [
    { title: ABOUT_US, url: ()=>'/about-us' },
    { title: BACKPACK, url: ()=>'/backpack' },
    { title: USEFUL_ARTICLES, url: ()=>`/articles?current-page=${FIRST_PAGE}`},
    { title: ROUTES, url: ()=>`/hiking-itineraries?current-page=${FIRST_PAGE}`},
    { title: ACCOUNT, url: (id)=>`/profile?userId=${id}`},
  ]

const Navigation = ({screenWidth}) => {
  const classes = useStyles()
  const logined = !!useSelector(state => state?.authenticationData?.token)
  const userId = useSelector(state => state?.authenticationData?._id)
  const history = useHistory()
  const dispatch = useDispatch()
  
  const authorizationHandler = () => {
    history.push('/auth-page')
  }

  const logOutHandler = () => {
    dispatch(logOut())
    history.push('/') 
  }

  return(
    <React.Fragment>
          {screenWidth <= MD ?
            <Toolbar className={classes.toolbar}>
              <SearchInput placeholder = {SEARCH_PLACEHOLDER}/>
            </Toolbar> : null}
        <Toolbar component="nav" variant="dense" className={classes.toolbarButtons}>
            {logined ? 
              <Button variant="outlined" className = {`${classes.navButton}`} size="large" color = 'inherit' onClick = {logOutHandler}>{LOG_OUT}</Button> 
              :
              <Button variant="outlined" className = {classes.navButton} size="large" color = 'inherit' onClick = {authorizationHandler}>{LOG_IN}</Button>
            }
          {links.map((section) => (
            <CustomizedNavLink
              key={section.title}
              to = {section.url(userId)}
              label = {section?.title}
            />
          ))}
        </Toolbar>
    </React.Fragment>
  )
}

export default Navigation
