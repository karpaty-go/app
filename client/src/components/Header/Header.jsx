import React,{useState, useEffect} from 'react'
import { useStyles } from './style';
import SearchInput from '../Reused-components/Search-input';
import Box from '@material-ui/core/Box';
import {NAVIGATION} from '../../constants/navigation'
import Logo from '../Reused-components/Logo'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import * as screenSizes from '../../constants/screen-sizes'
import {useSelector } from 'react-redux'
import ResponsiveNavigation from './ResponciveNavigation';
  const {SEARCH_PLACEHOLDER } = NAVIGATION
  const {MD, LG } = screenSizes
  
  const Header = () => {
    const classes = useStyles();
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const screenWidth = useSelector(state => state.innerDataReducer.windowWidth)
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 1280px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };
 
    return (
      <Box className = {classes.headerContainer}>
          <Box className = {classes.headerWrapper}>
            {
              screenWidth <= LG ?
              isNavVisible?
                <IconButton 
                  edge="start" 
                  className={classes.burgerButtonWrapper} 
                  color="inherit"
                  onClick = {toggleNav} 
                  >
                    <MenuOpenIcon className={classes.burgerButton}/>
                  </IconButton> 
                  :
                  <IconButton 
                  edge="start" 
                  className={classes.burgerButtonWrapper} 
                  color="inherit" 
                  onClick = {toggleNav}
                  >
                      <MenuIcon className={classes.burgerButton}/>
                  </IconButton>: null
                }
            {screenWidth > LG ?
              <ResponsiveNavigation
                isSmallScreen = {isSmallScreen}
                isNavVisible = {isNavVisible}
              />
              : screenWidth > MD ?
                <SearchInput placeholder = {SEARCH_PLACEHOLDER}/>
            : null
            }
            <Logo/>
          </Box>
            {screenWidth <= LG ?
              <ResponsiveNavigation
                isSmallScreen = {isSmallScreen}
                isNavVisible = {isNavVisible}
              />
              : null
            }
        </Box>
    );
  }

export default Header