// import {React, useState} from 'react'
import SideBar from '../partials/SideBar'
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
        <SideBar />
    </div>
  )
}

export default Admin