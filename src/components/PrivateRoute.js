import React from 'react'
import { Navigate } from 'react-router-dom';
// apne app dashboard aa jaaega children ke through
const PrivateRoute = ({isLoggedin , children}) => {
  if(isLoggedin) 
  {
    return children;
  }
  else 
  {
    return <Navigate to={'/login'}/>
  }
}

export default PrivateRoute
