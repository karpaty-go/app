import React from 'react'
import Box from '@material-ui/core/Box';
import { Switch } from 'react-router-dom'
import PrivateRoute from '../../../Reused-components/PrivateRoute';
import CreateArticle from './CreateArticle/CreateArticle'

const ProfileRouter = () => {
return(<Box style = {{width:'100%',backgroundColor:'blue'}}>
          <Switch>
            <PrivateRoute path="/profile" component = {ProfileSettings} exact/>
            <PrivateRoute path="/profile/articles" component = {ProfileArticles} exact/>
            <PrivateRoute path="/profile/create-article" component = {CreateArticle} exact/>
            <PrivateRoute path="/profile/edit-article" component = {EditArticle} exact/>
          </Switch>
      </Box>)
}

export default ProfileRouter

const ProfileSettings = (props) => {
  return <div>settings</div>
}

const ProfileArticles = (props) => {
  return <div>ProfileArticles</div>
}

// const CreateArticle = (props) => {
//   return <div>CreateArticle</div>
// }

const EditArticle = (props) => {
  return <div>EditArticle</div>
}