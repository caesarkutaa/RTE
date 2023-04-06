import { React, useState, useEffect } from "react";
import axios from "../API/axios";
const song_URL = '/song'
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Songs = () => {
  const [success, setSuccess] = useState('')
  const [file, setFile] = useState();
  const [songName, setSongNane] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songVideo, setSongVideo] = useState("");
  const [errMsg, setErrMsg] = useState('');

  // useEffect(() => {

  // }, [])
  const token = cookies.get('Token')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('songname', songName)
    data.append('artist', songArtist)
    data.append('songsvideo', songVideo)
    data.append('audio', file)
    console.log('data', data )

    try {
      const response = await axios.post(song_URL, 
      data,
      {
        headers: {
           Authorization: `Bearer ${token}`,
           "content-type": "multipart/form-data",
           Accept: 'application/json', 
           Accept: "application/octet-stream"
        }
      }  
      );
      console.log(JSON.stringify(response?.data))
      setSuccess(`${JSON.stringify(response?.data.songname)} uploaded successfully`)
      setSongNane("")
      setSongArtist("")
      setSongVideo("")
      setFile()
    } catch (error) {
      console.log(error);
      setErrMsg('song not uploaded. try again ')

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
          <p className="text-gray-600">Song Name</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter Song Name"
            value={songName}
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
            required
          />
        </label>
        <label className="block" for="name">
          <p className="text-gray-600">Video</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
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
            required
          />
          browse
        </label>
        <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
          Submit
        </button>
      </form>
      <p className="text-green-600 text-center">{success} </p>
      <p className="text-red-600 text-center">{errMsg} </p>
    </div>
  );
};

export default Songs;
