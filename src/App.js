import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { Route } from 'react-router-dom';
import UsersIndex from './components/UsersIndex';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AuthProvider from './Provider/authContext';
import { AuthRoute, ProtectedRoute } from "./util/routeUtil"
import LoggedIn from './Containers/LoggedIn';
import Profile from './Containers/Profile';


function App() {

  return (
    <div className="App">
      <AuthProvider>

        <NavBar />
        <Route exact path="/">
          <LoggedIn />
        </Route>
        
        <ProtectedRoute path="/users">
          <UsersIndex />
        </ProtectedRoute>
        
        <AuthRoute path="/signup">
          <SignUp />
        </AuthRoute>
        
        <AuthRoute path="/login">
          <LogIn />
        </AuthRoute>
        
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
      
      </AuthProvider>

      {/* <TimeElasped/> */}


    </div>
  );
}

export default App;
