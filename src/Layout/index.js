import React, { useState, useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { URL_ME, URL_PRIVATE_LISTS } from '../Requests'
import axios from 'axios'
import setAuthToken from '../Components/utils'
import * as routes from '../Routes'
import Grid from '@material-ui/core/Grid'
import PageNav from '../Components/Navbar'
import PageHome from '../Components/Home'
import PageSignup from '../Components/Signup'
import PageSignin from '../Components/Signin'
import PageList from '../Components/List'
import PageDev from '../Components/Devpanel'
const Layout = () => {
  let location = useLocation()
  useEffect(() => {
    let isSubscribed = true
    const getUser = async () => {
      try {
        let token = localStorage.getItem('token')
        await setAuthToken(token)
      } catch (err) {
       
      }
    }
    try {
      getUser()
    } catch (err) {
      
    }
    return () => isSubscribed = false
  }, [])




  return (
    <>
      {location.pathname !== '/Page-signup'
        && location.pathname !== '/Page-signin'
        && <PageNav/>
      }
      <Grid container alignContent="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={10} xl={8}>
          <Route
            exact
            path={routes.HOME}
            component={() => <PageHome />}
          />
          <Route
            exact
            path={routes.SIGNUP}
            component={() => <PageSignup />}
          />
          <Route
            exact
            path={routes.SIGNIN}
            component={() => <PageSignin />}
          />
          <Route
            exact
            path={routes.LIST}
            component={() => <PageList />}
          />
          <Route
            exact
            path={routes.DEV}
            component={() => <PageDev />}
          />
        </Grid>
      </Grid>
    </>
  )

}

export default Layout