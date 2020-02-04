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

const NOTI_VALUES = {
  msg: '',
  err: ""
}

const USER_VALUES = {
  id: "",
  username: "",
  email: "",
  position: "",
  password: ""
}

const COUNT_VALUES = {
  notilegth: ""
}


const Layout = () => {
  const [user, setUser] = useState(USER_VALUES)
  const [noti, setNoti] = useState(NOTI_VALUES)
  const [count, setCount] = useState(COUNT_VALUES)
  let location = useLocation()


  useEffect(() => {
    let isSubscribed = true
    const getUser = async () => {
      try {
        let token = localStorage.getItem('token')
        setAuthToken(token)
        let cb = await axios.get(URL_ME)
        if (isSubscribed) {
          setUser({
            id: cb.data.data.id,
            username: cb.data.data.username,
            email: cb.data.data.email,
            phone: cb.data.data.phone,
            position: cb.data.data.position
          })
          setNoti({ msg: `Login as ${cb.data.data.username}` })
        }
      } catch (err) {
        setNoti({ err: "session expired! Login again" })
      }
    }
    try {
      getUser()
    } catch (err) {
      setNoti({ err: "session expired! Login again" })
    }
    return () => isSubscribed = false
  }, [])


  useEffect(() => {
    let isSubscribed = true
    const getData = async () => {
      try {
        let token = localStorage.getItem('token')
        setAuthToken(token)
        let cb = await axios.get(URL_PRIVATE_LISTS)
        if (isSubscribed) {
          setCount({ notilength: cb.data.data.length })

        }
      } catch (err) {

      }
    }
    try {
      getData()
    } catch (err) {

    }
    return () => isSubscribed = false
  }, [])


  return (
    <>
      {location.pathname !== '/Page-signup'
        && location.pathname !== '/Page-signin'
        && <PageNav user={user} noti={noti} count={count} />
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