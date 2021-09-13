import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ChatIndex from './components/chat/ChatIndex'
import ChatShow from './components/chat/ChatShow'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/secureRoute'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SecureRoute path="/chat/:chatId">
          <ChatShow />
        </SecureRoute>
        <SecureRoute path="/chat">
          <ChatIndex />
        </SecureRoute>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
