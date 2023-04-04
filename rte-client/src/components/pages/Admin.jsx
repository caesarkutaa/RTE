// import {React, useState} from 'react'
import Dashboard from '../partials/Dashboard';
import Login from '../login';
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Admin = () => {
  const token = cookies.get('Token')
  function setToken (){
const token = cookies.get('Token')
  }

  window.addEventListener("load", () => {
    setToken()
  console.log(token)
  });

console.log(cookies.get('Token'))
if(!token) {
  return<Login  />
}




  return (
    <div>
        <Dashboard />
    </div>
  )
}

export default Admin