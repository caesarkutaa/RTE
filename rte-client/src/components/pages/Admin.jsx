// import {React, useState} from 'react'
import Dashboard from '../partials/Dashboard';
import Login from '../login';

const Admin = () => {

  function setToken (){
const tokenString = JSON.parse(localStorage.getItem('Token'))

if(!tokenString) {
  return<Login  />
}
}

window.addEventListener("load", () => {
  setToken()
console.log(tokenString)
});

  return (
    <div>
        <Dashboard />
    </div>
  )
}

export default Admin