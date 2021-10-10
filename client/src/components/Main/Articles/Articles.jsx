import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../../redux/map-state-to-props';
import mapDispatchToProps from '../../../redux/map-dispatch-to-props';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useStyles } from './style'
import Article from './Article'
import { useSelector } from 'react-redux';
import {PENDING} from '../../../redux/actions'
import Loader from '../../Reused-components/Loader'
import Pagination from './Pagination';
import {ORDERS_PER_PAGE} from '../../../constants/articles'
import { useLocation } from 'react-router';
import { CURRENT_PAGE, SEARCH } from '../../../constants/navigation';
import {useSearchQueryParameter } from '../../../hooks'

const Articles = (props) => {
  const classes = useStyles();
  const {type, getArticles } = props
  const uploadStatus = useSelector(state => state?.promiseReducer?.articles?.status)
  const cards = useSelector(state => state?.promiseReducer?.articles?.payload?.articles)
  const { search } = useLocation()
  const [page] = useSearchQueryParameter(CURRENT_PAGE, search)
  const [searchRequest] = useSearchQueryParameter(SEARCH, search)
  
  useEffect(()=>{
    const data = {
                  page: page ? page - 1 : 0, /* subtract 1 from current page to skip previous page last value . To avoid page №1 * 9  should skip 9 on fist page*/
                  limit: ORDERS_PER_PAGE,
                  regExp:searchRequest,
                  type
                }
    getArticles(data)
  },[type, searchRequest, page, getArticles])

  
  return (
        <Container className={classes.cardGrid} maxWidth={'lg'}>
          {uploadStatus !== PENDING ?
           <Grid container spacing={4}>
            {cards?.map((data) => (
              <Article key = {data._id} data = {data} />
            ))}
            <Pagination/>
          </Grid> 
          : 
          <Loader/>}
        </Container>
  );
}

const ARTICLES_W = connect(mapStateToProps("Articles"), mapDispatchToProps("Articles"))(Articles);
export default ARTICLES_W;