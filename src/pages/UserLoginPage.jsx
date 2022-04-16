import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import UserLogin from '../components/common/UserLogin'

class UserLoginPage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuDesktop />
        <UserLogin />
        <FooterDesktop />
    </Fragment>
    )
  }
}

export default UserLoginPage