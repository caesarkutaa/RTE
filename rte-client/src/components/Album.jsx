import { React, useState } from "react";
import axios from "../API/axios";
import Cookies from "universal-cookie";
const album_URL = "/album";
const cookies = new Cookies();

const Album = () => {
    const [success, setSuccess] = useState("");
    const [tracklists, setTracklists] = useState([]);
    const [coverArt, setCoverArt] = useState();
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [albumArtist, setAlbumArtist] = useState("");
    const [errMsg, setErrMsg] = useState("");


    const token = cookies.get("Token");
    const handleSubmit = async (e) => {
      e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("artist", albumArtist);
        // data.append("image", coverArt);
        for (let i = 0; i < tracklists.length; i++) {
            data.append('tracklists', tracklists[i])
          }
        data.append("desc", desc)
        console.log(tracklists)
        try {
            const response = await axios.post(album_URL, data, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "content-type": "multipart/form-data",
                  Accept: "application/json",
                  Accept: "application/octet-stream",
                },
              });
              setSuccess(
                `${JSON.stringify(response?.data.title)} uploaded successfully`
              );
        } catch (error) {
            console.log(error)
        }
      }
      function handleCoverArt(event) {
        setCoverArt(event.target.files[0]);
      }

      function handleFile(event) {
        setTracklists(event.target.files);
        console.log(event.target.files)
      }

  return (
    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <div className="bg-blue-800 px-10 py-10 text-center text-white">
        <p className="font-serif text-2xl font-semibold tracking-wider">
          Add Album
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 px-8 py-10">
        <label className="block" for="name">
          <p className="text-gray-600">Album Title</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter Album Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        {/* <label className="shadow-blue-100 mt-6 block rounded-full border bg-white px-4 py-4 font-normal text-blue-500 shadow hover:bg-blue-50">
          <input
            className=""
            type="file"
            name="coverArt"
            id=""
            onChange={handleCoverArt}
            placeholder="album cover art"
            required
          />
          browse
        </label> */}
        <label className="block" for="name">
            <p className="text-gray-600">Album Description</p>
            <textarea
              className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter album description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </label>
        <label className="block" for="name">
          <p className="text-gray-600">Song Artist</p>
          <input
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter Artist Name"
            value={albumArtist}
            onChange={(e) => setAlbumArtist(e.target.value)}
            required
          />
        </label>
        <label className="shadow-blue-100 mt-6 block rounded-full border bg-white px-4 py-4 font-normal text-blue-500 shadow hover:bg-blue-50">
          <input
            className=""
            type="file"
            name="file"
            id=""
            onChange={handleFile}
            multiple
            placeholder="pick songs in the album"
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
  )
}

export default Album