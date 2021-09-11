import React from 'react'
import {Switch, BrowserRouter as Router } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Browse from './pages/browse'
import Signup from './pages/signup'
import Signin from './pages/signin'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import useAuthListener from './hooks/use-auth-listener'

export default function App() {
  const { user } = useAuthListener();
  console.log(user)
    
  return (
      <Router>
        <Switch>
        <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.BROWSE} 
            path={ROUTES.SIGN_IN}
        >
            <Signin />
        </IsUserRedirect>
        <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.BROWSE} 
            path={ROUTES.SIGN_UP}
        >
            <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />  
        </ProtectedRoute>
        <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.BROWSE} 
            path={ROUTES.HOME}
            exact
        >
            <Home />
        </IsUserRedirect>
        </Switch>
      </Router>
  );
}


