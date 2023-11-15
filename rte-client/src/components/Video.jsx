import { React, useState } from 'react';
import axios from "../API/axios";
const song_URL = '/song/search';
const update_URL = '/song/addvideo/'
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Video = () => {
  const token = cookies.get('Token')

  const [success, setSuccess] = useState('')
  const [songVideo, setSongVideo] = useState("");
  const [songName, setSongNane] = useState("");
  const [errMsg, setErrMsg] = useState('');
const handleUpdate = async(e) =>{
  e.preventDefault();
  try {
    const response = await axios.get(song_URL, 
      {
        params: {
          songname: `${songName}`,
        },
        headers: {
           Authorization: `Bearer ${token}`,
           Accept: 'application/json', 
           Accept: "application/octet-stream"
        }
      }  
      );
       const song_ID = JSON.stringify(response?.data?.song[0]._id)
       const id = song_ID.replace(/["]/g, '')
    const videoUpdateResponse = await axios.patch(`${update_URL}${id}`,
    JSON.stringify({ songVideo }),
        {
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`, 
              }
        }
  )
  setSuccess(`${JSON.stringify(videoUpdateResponse?.data?.msg)}`)
  setErrMsg('')
  setSongNane('')
  setSongVideo('')
  } catch (err) {
    if (!err?.
      response) {
      setErrMsg('No Server Response');
  } else if (err.response?.status === 400) {
      setErrMsg('enter the correct song name');
  } else if (err.response?.status === 404) {
      setErrMsg('song not found');
  } else {
      setErrMsg('video upload Failed, try again');
  }
  }
   
}
    
  return (
    <>

    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">  
    <div className="bg-blue-800 px-10 py-10 text-center text-white">
        <p className="font-serif text-2xl font-semibold tracking-wider">Add Song video</p>
      </div>

      <p className='text-center'  style={{color:"red"}}>{errMsg}</p>
      <p className='text-center' style={{color:"green"}}>{success}</p>
  <form onSubmit={handleUpdate} >
    <div className="space-y-4 px-8 py-10">
        <label className="block" for="name">
          <p className="text-gray-600">Video</p>
          <input type="name" value={songName} onChange={(e) => setSongNane(e.target.value)} name="search" className="h-14 w-full rounded-md py-4   outline-none focus:ring-2" placeholder="enter Song Name" />
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter video link"
            value={songVideo}
            onChange={(e) => setSongVideo(e.target.value)}
          />
        </label>
        <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
      </div>
  </form>
        
      
        </div>
    </>
    
  )
}

export default Video