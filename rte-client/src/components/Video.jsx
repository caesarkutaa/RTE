import { React, useState } from 'react';
import axios from "../API/axios";
const song_URL = '/song/search';
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Video = () => {
  const token = cookies.get('Token')

  const [songVideo, setSongVideo] = useState("");
  const [songName, setSongNane] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('songname', songName)

    console.log('songname', data.songname )

    try {
      const response = await axios.get(song_URL, 
        data,
        {
          headers: {
             Authorization: `Bearer ${token}`,
             Accept: 'application/json', 
             Accept: "application/octet-stream"
          }
        }  
        );
        console.log(JSON.stringify(response?.data))
    } catch (error) {
      console.log(error);
      
    }
}
    
  return (
    <>

    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">  
    <div className="bg-blue-800 px-10 py-10 text-center text-white">
        <p className="font-serif text-2xl font-semibold tracking-wider">Add Song video</p>
      </div>

  <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"> 
    <svg className=" block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" className=""></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
    </svg>
    <input type="name" value={songName} onChange={(e) => setSongNane(e.target.value)} name="search" className="h-14 w-full rounded-md py-4   outline-none focus:ring-2" placeholder="enter Song Name" />
    <button type="submit" className=" inline-flex h-12 items-center  rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700">Search</button>
  </form>
        <div className="space-y-4 px-8 py-10">
        <label className="block" for="name">
          <p className="text-gray-600">Video</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="email"
            placeholder="Enter video link"
            value={songVideo}
            onChange={(e) => setSongVideo(e.target.value)}
          />
        </label>
        <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
      </div>
      
        </div>
    </>
    
  )
}

export default Video