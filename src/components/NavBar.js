import React from 'react';
import { NavLink } from 'react-router-dom';


// Add basic styling for Navlinks
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar (){
  return (
    <div>
{/* set exact so it knows to only set activeStyle when route is deeply equal to link 
add styling to navlink
add prop for activestyle  */}

      <NavLink
      to="/" exact style={linkStyles} activeStyle={{
        background: "darkblue",
      }}> Home  </NavLink>

      <NavLink
      to="/about" exact style={linkStyles} activeStyle={{
        background: "darkblue",
      }}> About  </NavLink>

      <NavLink
      to="/messages" exact style={linkStyles} activeStyle={{
        background: "darkblue",
      }}> Messages </NavLink>

      <NavLink
      to="/signup" exact style={linkStyles} activeStyle={{
        background: "darkblue",
      }}> Signup </NavLink>

      <NavLink
      to="/login" exact style={linkStyles} activeStyle={{
        background: "darkblue",
      }}> Login </NavLink>   
    </div>
  );
}


export default NavBar