import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'
import {ORDERS_PER_PAGE} from '../../../constants/articles'
import {useHistory, useLocation } from 'react-router-dom'
import {useSearchQueryParameter } from '../../../hooks'
import { CURRENT_PAGE, FIRST_PAGE } from '../../../constants/navigation';

const useStyles = makeStyles(() => ({
    root:{
        width: '100%',
    display: 'flex',
    justifyContent:'center',
        "&.MuiPaginationItem-page,.Mui-selected,.Mui-selected:hover":{
            backgroundColor:'#2da1c4',
        }
    }
  }));

  const ArticlesPagination = () => {
      const history = useHistory()
      const {pathname, search} = useLocation()
      const quantity = useSelector(state => state?.promiseReducer?.articles?.payload?.quantity)
      const count = Math.ceil(quantity / ORDERS_PER_PAGE)
      const classes = useStyles();
  
      const [activePage] = useSearchQueryParameter(CURRENT_PAGE,search)
  
      const handleChange = (e, value) => {
        let newUrl = null
          if(search.includes(CURRENT_PAGE)){
              // substitute current page number on actual current page number
              const regExp = new RegExp(`${CURRENT_PAGE}=\\d+`)
              const queryWithUpdatedCurrentPage = search.replace(regExp,`${CURRENT_PAGE}=${value}`)
              newUrl = `${pathname}${queryWithUpdatedCurrentPage}`
          }else if(!search){
            const newSearch = `?${CURRENT_PAGE}=${value}`
            newUrl = `${pathname}${newSearch}`
          }else{
              console.log('else triggered')
          }
          history.push(newUrl)
      }
  
      return (count ? <Pagination 
                          onChange={handleChange}
                          classes={{root: classes.root }} 
                          size = 'large' 
                          count={count} 
                          page = {+ activePage || FIRST_PAGE}
                      /> : null)
  }
  
  export default ArticlesPagination
