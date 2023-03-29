// import {React, useState} from 'react'
import SideBar from '../partials/SideBar'
import Login from '../login'


 
const tokenString = JSON.parse(localStorage.getItem('Token'))
console.log(tokenString)

const Admin = () => {
  // const {token, settoken }= useToken()
  if(!tokenString) {
    return<Login  />
  }

  return (
    <div>
        <SideBar />
    </div>
  )
}

export default Admin