import React from 'react'
import { useStyles } from './style'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import InputBase from "@material-ui/core/InputBase";
import { useHistory, useLocation } from 'react-router';
import { CURRENT_PAGE, SEARCH } from '../../constants/navigation';
import { parseUrlQuery } from '../../tools';
import { useSearchQueryParameter } from '../../hooks';
import {FIRST_PAGE} from '../../constants/navigation'

const SearchInput = (props) => {
  const history = useHistory()
  const {pathname, search} = useLocation()
  const { placeholder } = props
  const classes = useStyles()
  const [value, setValue] = useSearchQueryParameter(SEARCH, search)
      
    const searchHandler = () => {
      let newUrl = null
      let newQuery = null
      if(value){
        const regExp = new RegExp(`${CURRENT_PAGE}=\\+d`)
        const queryForFirstPage = search.replace(regExp,`${CURRENT_PAGE}=1`)
        if(search.includes(SEARCH)){
          const parsedUrl = parseUrlQuery(queryForFirstPage)
          const valueForSearch = parsedUrl[SEARCH]
          const regExp = new RegExp(`${SEARCH}=${valueForSearch}`)
          newQuery = queryForFirstPage.replace(regExp,`${SEARCH}=${value}`)
          const valueForCurrentPage = parsedUrl[CURRENT_PAGE]
          const currentPageRegExp = new RegExp(`${CURRENT_PAGE}=${valueForCurrentPage}`)
          newQuery = newQuery.replace(currentPageRegExp,`${CURRENT_PAGE}=${FIRST_PAGE}`)
        }else{
            newQuery = `?${CURRENT_PAGE}=${FIRST_PAGE}&${SEARCH}=${value}`
        }
      }
      else{
        const parsedUrl = parseUrlQuery(search)
        const valueForSearch = parsedUrl[SEARCH]
        const regExp = new RegExp(`&${SEARCH}=${valueForSearch}`)
        newQuery = search.replace(regExp,``)
        const valueForCurrentPage = parsedUrl[CURRENT_PAGE]
        const currentPageRegExp = new RegExp(`${CURRENT_PAGE}=${valueForCurrentPage}`)
        newQuery = newQuery.replace(currentPageRegExp,`${CURRENT_PAGE}=${FIRST_PAGE}`)
      }
      newUrl = `${pathname}${newQuery}`
      history.push(newUrl)
    }
    
    return(
      <Box className = {classes.searchInputContainer}>
      <IconButton
        type="submit"
        onClick = {searchHandler}
      >
        <SearchIcon className={classes.iconButton} 
        />
      </IconButton>
        <InputBase
        // add clear button with clearHandler() on click
        value = {value}
        className={classes.searchInput}
        placeholder={placeholder}
        onChange = {(e) => setValue(e.target.value)}
      />
        </Box>
    )
} 

export default SearchInput
