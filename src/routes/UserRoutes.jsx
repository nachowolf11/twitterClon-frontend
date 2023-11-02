import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ExplorePage, HomePage } from '../pages'

export const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <HomePage/> }/>
        <Route path="/explore" element={ <ExplorePage/> }/>
    </Routes>
  )
}
