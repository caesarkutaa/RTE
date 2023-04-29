import React from 'react'
import logo from "../../assets/logo.jpeg";

const Sidebar = () => {
  return (
    <div>
        <div className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <span className="">
        <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">
            <img src={logo} alt="" srcset="" />
        </span>
        <span className="text-lg italic ">Right Time Entertainment</span>
        </span>

        <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label className="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>


    <div className=" peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="font-bold md:mr-12"><a href="#">Songs</a></li>
        <li className="font-bold md:mr-12"><a href="#">Music Videos</a></li>
        <li className="font-bold md:mr-12"><a href="#">News</a></li>
        <li className="font-bold md:mr-12"><a href="#">Albums</a></li>
        <li className="font-bold md:mr-12">
          <button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Contact us</button>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Sidebar