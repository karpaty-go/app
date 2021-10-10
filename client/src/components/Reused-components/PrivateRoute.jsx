
import React,{useEffect} from 'react'
import { Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {ACCES_DENIED_TO} from '../../constants'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const doesUserRegistered = !!useSelector(store => store?.authenticationData?.token)

    useEffect(()=>{
      if(!doesUserRegistered) sessionStorage.setItem(ACCES_DENIED_TO,rest.path)
      else sessionStorage.removeItem(ACCES_DENIED_TO,rest.path)
    },[doesUserRegistered])
    
    return <Route {...rest} render={(props) => (
        doesUserRegistered
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/auth-page',
            // state: { from: props.location }
          }} />
    )} />
  }

  export default PrivateRoute;