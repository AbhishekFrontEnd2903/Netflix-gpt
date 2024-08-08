import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        // path:'/',
        // element:<Body/>
    ])
  return (
    <div>
      <Login/>
      <Browse/>
    </div>
  )
}

export default Body
