import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Articles from '../Main/Articles/Articles'
import HomePage from '../Main/HomePage/HomePage'
import { TYPE_ARTICLE, TYPE_ITINERARY } from '../../constants/articles'
import PrivateRoute from '../Reused-components/PrivateRoute'
import AuthorizationPage from '../Main/AuthorizationPage/AuthorizationPage'
import FullDescriptionArticle from '../Main/FullDescriptionArticle/FullDescriptionArticle'
import ProfilePage from '../Main/Profile/ProfilePage'

const Routes = () =>{
    return(
          <Switch>
            <Route path="/articles" exact>
              <Articles type = {TYPE_ARTICLE}/>
            </Route>
            <Route path="/hiking-itineraries" exact>
              <Articles type = {TYPE_ITINERARY}/>
            </Route>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/about-us" exact>
               <div>about us </div>
            </Route>
            <Route path="/backpack" exact>
                <div>backpack</div>
            </Route>
            <Route path = '/auth-page' exact>
              <AuthorizationPage/>
            </Route>
            <PrivateRoute path="/profile" component = {ProfilePage}/>
            <Route path="/read-article/:articleId" exact>
                <FullDescriptionArticle/>
            </Route>
          </Switch>
    )
}

export default Routes