import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import CustomizedNavLink from '../../../Reused-components/CustomizedNavLink';
import { useLocation } from 'react-router';
import { CREATE_ARTICLE, PROFILE, PROFILE_ARTICLES, USER_ID } from '../../../../constants/profile-page';
import { useSearchQueryParameter } from '../../../../hooks';
import UserCard from './parts/UserCard'

const AsideNav = () => {
  const { search } = useLocation()
  const [userId] = useSearchQueryParameter(USER_ID, search)

  return (<Box
      style={{minWidth:'20vw', display: 'flex', flexDirection:'column'}}
    >
        <UserCard/>
        <CustomizedNavLink to = {`/profile?userId=${userId}`} label= {PROFILE}/>
        <CustomizedNavLink to = {`/profile/articles?userId=${userId}`} label={PROFILE_ARTICLES}/>
        <CustomizedNavLink to = {`/profile/create-article?userId=${userId}`} label={CREATE_ARTICLE}/>
    </Box>
  );
}

export default AsideNav