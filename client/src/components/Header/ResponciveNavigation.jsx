import React from 'react'
import { useStyles } from './style';
import Toolbar from '@material-ui/core/Toolbar';
import SearchInput from '../Reused-components/Search-input';
import Box from '@material-ui/core/Box';
import Navigation from './Navigation'
import {NAVIGATION} from '../../constants/navigation'
import { CSSTransition } from "react-transition-group";
import * as screenSizes from '../../constants/screen-sizes'
import {useSelector } from 'react-redux'
  const {SEARCH_PLACEHOLDER} = NAVIGATION
  const {LG} = screenSizes
  
const ResponsiveNavigation = (props) => {
  const classes = useStyles()
  const screenWidth = useSelector(state => state.innerDataReducer.windowWidth)

  const {isSmallScreen, isNavVisible } = props
  return(
            <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={15}
                    classNames="NavAnimation"
                    unmountOnExit
                    >
                      <Box className = {classes.toolbarsWrapper}>
                      {screenWidth > LG ? 
                        <Toolbar className={classes.toolbar}>
                          <SearchInput placeholder = {SEARCH_PLACEHOLDER}/>
                        </Toolbar> : null}
                        <Navigation screenWidth = {screenWidth}/>
                      </Box>
            </CSSTransition>
  )
}

export default ResponsiveNavigation