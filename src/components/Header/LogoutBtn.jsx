import React from 'react'
import { useDispatch } from 'react-redux'
import { authService } from '../../services/authServices.js'
import {logout} from "../../store/slices/authSlice.js"

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
    <button onClick={logoutHandler}> 
        Logout
    </button>
  )
}

export default LogoutBtn
