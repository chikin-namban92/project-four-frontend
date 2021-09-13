import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ChatIndex from './components/chat/ChatIndex'
import ChatShow from './components/chat/ChatShow'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chat/:chatId">
          <ChatShow />
        </Route>
        <Route path="/chat">
          <ChatIndex />
        </Route>
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
