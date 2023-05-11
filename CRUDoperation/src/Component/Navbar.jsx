import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
      <div style={{
          backgroundColor: "red",
          height: "50px",
      }}>
          <div style={{
              display: "flex", 
              justifyContent: "space-around",
              padding: "5px",
}}>
            <Link to="/"><button style={{
                  backgroundColor: "blue",
                  border: "none",  
                  borderRadius: "9px",
                  padding: "8px",
                   color:"white"
               }}>Home</button></Link> 
             <Link to="/add-country"> <button style={{
                  backgroundColor: "blue",
                  border: "none",  
                  borderRadius: "9px",
                  padding: "8px",
                   color:"white"
               }}>Add Country</button></Link> 
             <Link to="/add-city"> <button style={{
                  backgroundColor: "blue",
                  border: "none",  
                  borderRadius: "9px",
                  padding: "8px",
                   color:"white"
               }}>Add City</button></Link> 
             
          </div>
    </div>
  )
}
