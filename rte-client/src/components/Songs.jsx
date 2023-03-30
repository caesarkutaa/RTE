import {React, useState} from 'react'

const Songs = () => {

    const [file, setFile] = useState()

    function handleFile(event){
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
  return (
    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
  
<div className="bg-blue-800 px-10 py-10 text-center text-white">
    <p className="font-serif text-2xl font-semibold tracking-wider">Add Song</p>
  </div>
    <div className="space-y-4 px-8 py-10">
    <label className="block" for="name">
      <p class="text-gray-600">Song Name</p>
      <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter Song Name" />
    </label>
    <label className="block" for="name">
      <p className="text-gray-600">Song Artist</p>
      <input className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Enter Artist Name" />
    </label>
    <label className="block" for="name">
      <p className="text-gray-600">Video</p>
      <textarea className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Enter the Video Link"></textarea>
    </label>
    <label className="shadow-blue-100 mt-6 block rounded-full border bg-white px-4 py-4 font-normal text-blue-500 shadow hover:bg-blue-50">
          <input className="" type="file" name="file" id=""  onChange={handleFile}/>
          browse</label
        >
    <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">Submit</button>
  </div>
  
    </div>

    
  )
}

export default Songs