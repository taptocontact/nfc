// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/client-infos/{id:String}" page={ClientInfoClientInfoPage} name="clientInfo" />

      <Route path="/signup" page={SignupPage} name="signup" />

      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>



      <PrivateSet unauthenticated='login'>
        <Set wrap={DashboardLayout}>


          <Route path="/client-infos/{id:Int}/edit" page={ClientInfoEditClientInfoPage} name="editClientInfo" />
          <Set wrap={ScaffoldLayout} title="ClientInfos" titleTo="clientInfos" buttonLabel="New ClientInfo" buttonTo="newClientInfo">
            <Route path="/client-infos/new" page={ClientInfoNewClientInfoPage} name="newClientInfo" />

            <Route path="/client-infos" page={ClientInfoClientInfosPage} name="clientInfos" />
          </Set>


        </Set>
      </PrivateSet>
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
