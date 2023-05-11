import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Component/Home'
import AddCountry from '../Component/AddCountry'
import AddCity from '../Component/AddCity'
export default function AllRoutes() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home/> } />
              <Route path="/add-country" element={<AddCountry/> } />
              <Route path="/add-city" element={<AddCity/> } />
          </Routes>
    </div>
  )
}
