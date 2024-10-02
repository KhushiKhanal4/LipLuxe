import React from 'react'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/store/Store.js'


function App() {

  return (
    <>
    <Provider store={store}>
      <NavBar />
      <Outlet />
      <Footer />
    </Provider>
    </>
  )
}

export default App