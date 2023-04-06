import { React, useState, useEffect } from "react";
import axios from "../API/axios";
const song_URL = '/song'

const Songs = () => {
  const [file, setFile] = useState();
  const [songNane, setSongNane] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songVideo, setSongVideo] = useState("");

  // useEffect(() => {

  // }, [])
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIyMWNkMjRhMTEyZWRkMGQ3NTNhMGQiLCJuYW1lIjoia3V0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU1MzM0MywiZXhwIjoxNjgwNjM5NzQzfQ.JfSmTIqyrt92rmiVnL9WP3vcCNulRsiz6YgTnHlQ7EM"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const songname = songNane
    const artist = songArtist
    const songsvideo = songVideo
    const audio = file
    console.log('data', songname,artist, songsvideo, audio )

    try {
      const response = await axios.post(song_URL, 
      JSON.stringify({songname,artist,songsvideo,audio}),
      {
        headers: {
           Authorization: `Bearer ${token}`
        }
      }  
      );
      console.log(JSON.stringify(response?.data))
    } catch (error) {
      console.log(error);
    }
  }
  function handleFile(event) {
    setFile(event.target.files[0]);
  }
  return (
    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <div className="bg-blue-800 px-10 py-10 text-center text-white">
        <p className="font-serif text-2xl font-semibold tracking-wider">
          Add Song
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 px-8 py-10">
        <label className="block" for="name">
          <p class="text-gray-600">Song Name</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter Song Name"
            value={songNane}
            onChange={(e) => setSongNane(e.target.value)}
            required
          />
        </label>
        <label className="block" for="name">
          <p className="text-gray-600">Song Artist</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter Artist Name"
            value={songArtist}
            onChange={(e) => setSongArtist(e.target.value)}
          />
        </label>
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
        <label className="shadow-blue-100 mt-6 block rounded-full border bg-white px-4 py-4 font-normal text-blue-500 shadow hover:bg-blue-50">
          <input
            className=""
            type="file"
            name="file"
            id=""
            onChange={handleFile}
          />
          browse
        </label>
        <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Songs;
